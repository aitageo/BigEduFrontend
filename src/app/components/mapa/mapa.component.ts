import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { marker } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
      const marker = L.marker([6.354233968597593, -75.4983243959306],{
        icon: L.icon({
          iconUrl: '../assets/img/presbitero.jpg',
          iconSize: [80, 90],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
        })
      }).addTo(map);

      marker.bindPopup(`Institución Educativa Presbítero Bernardo Montoya Giraldo`);
      marker.on('mouseover',(e)=> {
        marker.openPopup();
      })
      marker.on('mouseout',(e)=> {
        marker.closePopup();
      })


  }


}
