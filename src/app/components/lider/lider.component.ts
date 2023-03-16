import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthInterceptorServiceService } from 'src/app/services/auth-interceptor-service.service';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Intitucions } from 'src/app/interfaces/intitucions';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as L from 'leaflet';

import { Institucion } from 'src/app/models/institucion';

// import { marker } from 'leaflet';
import { MapaService } from 'src/app/services/mapa.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lider',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.component.css']
})
export class LiderComponent implements OnInit{
  [x: string]: any;
  public token:string
  public longitud : number
  public latitud : number
  public Institucion :Institucion 
  public map:any;
  public marker:any;
  public nombre;
  public institutionsList:any[]=[];
  public url:string
  public markersList:[]=[];
  public todasInstituciones:any
  public form: FormGroup; 
  

  constructor(
    private userservice:UsersService,
    private mapaservice:MapaService,
    private _userService:UsersService,
    private auth:  AuthInterceptorServiceService,
    private _http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder

  ) { 
    this.token = "";
    this.longitud = 0
    this.latitud = 0
    this.Institucion = new Institucion("","","","",0,0);
    this.nombre = "",
    this.url = "http://localhost:3100/api";

    this.form = this.formBuilder.group({
       Nombre_Institucion:['',Validators.required],
       Nombre_Coordinador:['',Validators.required],
       Nombre_Rector:['',Validators.required],
       Telefono: ['',Validators.required],
       Latitud: ['',Validators.required],
       Longitud: ['',Validators.required],
      
    });
    

  }



  ngOnInit(): void {
    this.initMap();
    this.GetIntitutions();
  }

  private initMap() {
    this.map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(this.map);

    for (let i = 0; i < this.institutionsList.length; i++) {
      const institucion = this.institutionsList[i];
      const marker = L.marker([institucion.lat, institucion.lng]).addTo(this.map);
      marker.bindPopup(institucion.nombre_institucion);
    }
      this.marker = this.mapaservice.agregarMarcador(
      parseFloat(this.Institucion.lat.toString()), //convierte el dato del formulario de Number a number
      parseFloat(this.Institucion.lng.toString()), 
      this.nombre = this.Institucion.nombre_institucion.toString(),
    );
    this.marker.addTo(this.map);
    // this.markersList.push({lat,lng,this.nombre})
  }

  saveInstitution(form:any){
    console.log(this.Institucion);
    this._userService.saveInstitution(this.Institucion);
    this.userservice.GetIntitutions();
    Swal.fire({
      icon: 'success',
      title: 'Registro Guardado',
      timer: 1200
    });
    // Obtener las coordenadas del marcador
    const lat = this.Institucion.lat;
    const lng = this.Institucion.lng;
  
    // Mover el marcador a las nuevas coordenadas
    this.marker.setLatLng([parseFloat(lat.toString()), parseFloat(lng.toString())]);
  
    // Centrar el mapa en las nuevas coordenadas del marcador
    this.map.setView([parseFloat(lat.toString()), parseFloat(lng.toString())], 15);
  
    form.reset();
    this.GetIntitutions();
    
   
  }
  


  GetIntitutions(){
    const token = this.auth.getToken()
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    this._http.get(this.url + '/institucion/todos',{headers:headers}).subscribe(
      (response:any) => {
         this.institutionsList = response.TodasInstituciones;
         console.log(this.institutionsList[0]);
      

     }
      
      )}

// ...
      
DeleteInstitucion(id: number,index:number) {
        const token = this.auth.getToken();
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        });
      
        // Show a confirmation dialog using SweetAlert
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción no se puede deshacer',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, borrar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // If the user confirms the action, send a DELETE request
            this._http.delete(this.url + '/institucion/borrar/' + id, { headers: headers }).subscribe(
              (response: any) => {
                this.institutionsList.splice(index,1)
                console.log(this.institutionsList);
                // Show a success message using SweetAlert
                Swal.fire({
                  title: 'Institución eliminada',
                  icon: 'success'
                });
              },
              (error: any) => {
                // Show an error message using SweetAlert
                Swal.fire({
                  title: 'Error al eliminar la institución',
                  text: error.message,
                  icon: 'error'
                });
              }
            );
          }
        });
      }
        

  destroyToken(){
    Swal.fire({
      title: 'Esta usted Seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Se cerrara la sesion!',
          'success'
        )//espera a que el cliente de click para eliminar el token
        setTimeout(() => {
          this.userservice.destroyToken()
        }, 2500);
      }
    })
    
    
   
    }




}
