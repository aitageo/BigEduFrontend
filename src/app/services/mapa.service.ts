import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { marker } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  constructor() { }

agregarMarcador(lat: number, lng: number, nombre: string) {
    const marker = L.marker([lat, lng]).bindPopup(nombre);
    return marker;
  }

  ngOnInit() {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
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

      marker.bindPopup(`Institución Educativa Presbítero Bernardo Montoya Giraldo,
                        Rector: Jose Luiz Cifuentes`);
      marker.on('mouseover',(e)=> {
        marker.openPopup();
      })
      marker.on('mouseout',(e)=> {
        marker.closePopup();
      });//fin presbitero

      const marker2 = L.marker([6.3465208464172065, -75.50386822107099],{
        icon: L.icon({
          iconUrl: '../assets/img/joseMiguel.png',
          iconSize: [80, 90],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
        })
      }).addTo(map);

      marker2.bindPopup(`Institución Educativa José Miguel de Restrepo y Puerta`);
      marker2.on('mouseover',(e)=> {
        marker2.openPopup();
      })
      marker2.on('mouseout',(e)=> {
        marker2.closePopup();
      })


  } 
  

}
