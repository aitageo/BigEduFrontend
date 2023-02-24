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
  // public nombre_institucion : string
  public Institucion :Institucion 

  constructor(private userservice:UsersService,private mapaservice:MapaService,private _userService:UsersService,
    private interceptor:AuthInterceptorServiceService) { 
    this.token = "";
    this.longitud = 0
    this.latitud = 0
    // this.nombre_institucion = "";
    this.Institucion = new Institucion("","","","",0,0);
  }

  ngOnInit(): void {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    // const mymap = L.map('map').setView([6.2486069,-75.5742467 ], 12);
    const marker = this.mapaservice.agregarMarcador(this.latitud, this.longitud, "Mi marcador");
    marker.addTo(map);

  }

  saveInstitution(form:any){
    console.log(this.Institucion);
    this._userService.saveInstitution(this.Institucion)
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Registro Guardado',
      //showConfirmButton: false,
      timer: 200
    })

  }




  destroyToken(){
    Swal.fire({
      title: 'Esta usted Seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',

      // confirmButtonText: 'Yes, delete it!'
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
