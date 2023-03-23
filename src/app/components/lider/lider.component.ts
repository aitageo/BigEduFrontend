import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthInterceptorServiceService } from 'src/app/services/auth-interceptor-service.service';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Intitucions } from 'src/app/interfaces/intitucions';
import { global } from 'src/app/services/global';
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
  public token:string
  public longitud : number
  public latitud : number
  public Institucion :Institucion 
  public map:any;
  public marker:any;
  public nombre;
  public institutionsList:any[]=[];
  public url:string
  public markersList:any[]=[];
  public todasInstituciones:any
  public form: FormGroup; 
  public Deparments:any[]=[]
  public Cities: any[]=[]
  public selectedDepartments: string="";
  public selectedCities: string="";
  public data:any[]=[] 

  

  constructor(
    private userservice:UsersService,
    private mapaservice:MapaService,
    private _userService:UsersService,
    private auth:  AuthInterceptorServiceService,
    private _http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    

  ) { 
    this.token = "";
    this.longitud = 0
    this.latitud = 0
    this.Institucion = new Institucion("","","","",0,0,"","","","");
    this.nombre = "",
    this.url = global.url;

    this.form = this.formBuilder.group({
       Nombre_Institucion:['',Validators.required],
       Nombre_Rector:['',Validators.required],
       Telefono_Rector:['',Validators.required],
       Nombre_Coordinador:['',Validators.required],
       Telefono_Coordinador:['',Validators.required],
       Telefono: ['',Validators.required],
       Latitud: ['',Validators.required],
       Longitud: ['',Validators.required],
       selectedDepartments: ['',Validators.required],
       selectedCities:['',Validators.required],
      
    });
    
const formdata = this.form.getRawValue()
  }




  ngOnInit(): void {
    this.GetIntitutions();
    this.initMap();
    //Api Socrata
    this._http.get<any[]>("https://www.datos.gov.co/resource/xdk5-pm3f.json").subscribe(data => {
      console.log(data);
      this.data = data;

      const NoEqualsDepartments:any = {};

      this.data.forEach(item => {
        NoEqualsDepartments[item.departamento] = true;
      });
      
      // this.Deparments = data.map(item => item.departamento);
      // console.log(this.Deparments);
      this.Deparments = Object.keys(NoEqualsDepartments);
      
      this.Cities = data.map(item => item.municipio);
      console.log(this.Cities);

     
      
    });
  }


onDepartamentoChange(event: any) {
  const selectedDepartment = event.target.value;
  this.Cities = this.data.filter(item => item.departamento === selectedDepartment)
  .map(item => item.municipio);
}



onMunicipioChange(event: any) {
  this.selectedCities = event.target.value;
}


//FIN Api Socrata


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

  //guarda una institucion obteniendo los datos del modal validados con formularios reactivos

  saveInstitution(form:any){
    // const formdata = this.form.getRawValue();
    console.log(this.Institucion);
    this._userService.saveInstitution(this.Institucion);
    this.userservice.GetIntitutions();
    this.GetIntitutions()
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
  

//obtiene todas las intituciones
GetIntitutions(){
  const token = this.auth.getToken()
  console.log(token);
  
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

  //Obtener una sola institucion

  // GetInstitution(id:number){
  //   this._userService.GetInstitution(id);
  //   this.userservice.GetIntitutions();

  // }



//borra la institucion pasandole como parametro el id      
DeleteInstitucion(id: number,index:number) {
        const token = this.auth.getToken();
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        });
      
        
        //Muestra el mensaje de confirmacion de  SweetAlert
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción no se puede deshacer',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, borrar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            //Si el usuario confirma la accion , envia el Delete request
            this._http.delete(this.url + '/institucion/borrar/' + id, { headers: headers }).subscribe(
              (response: any) => {
                this.institutionsList.splice(index,1)
                console.log(this.institutionsList);
                //Muestra un mensage usando SweetAlert
                Swal.fire({
                  title: 'Institución eliminada',
                  icon: 'success'
                });
              },
              (error: any) => {
                  //Muestra un mensage de error usando SweetAlert
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



        
//Fin crud


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
