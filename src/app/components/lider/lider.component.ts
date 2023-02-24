import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthInterceptorServiceService } from 'src/app/services/auth-interceptor-service.service';
import Swal from 'sweetalert2'
import * as L from 'leaflet';

import { Institucion } from 'src/app/models/institucion';

import { marker } from 'leaflet';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-lider',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.component.css']
})
export class LiderComponent implements OnInit {
  public token:string
  public longitud : number
  public latitud : number
  public Institucion :Institucion 
  public map:any;
  public marker:any;

  constructor(
    private userservice:UsersService,
    private mapaservice:MapaService,
    private _userService:UsersService,
    private interceptor:AuthInterceptorServiceService
  ) { 
    this.token = "";
    this.longitud = 0
    this.latitud = 0
    this.Institucion = new Institucion("","","","",0,0);
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = this.mapaservice.agregarMarcador(
      parseFloat(this.Institucion.lat.toString()), 
      parseFloat(this.Institucion.lng.toString()), 
      "Mi marcador"
    );
    this.marker.addTo(this.map);
  }

  saveInstitution(form:any){
    console.log(this.Institucion);
    this._userService.saveInstitution(this.Institucion)
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
        )
        setTimeout(() => {
          this.userservice.destroyToken()
        }, 2500);
      }
    })
    
    
   
    }




}
