import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'
import * as L from 'leaflet';

import { marker } from 'leaflet';

@Component({
  selector: 'app-lider',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.component.css']
})
export class LiderComponent implements OnInit {
  public token:string

  constructor(private userservice:UsersService) { 
    this.token = ""
  }

  ngOnInit(): void {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
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
