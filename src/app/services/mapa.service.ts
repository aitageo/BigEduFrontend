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
  

}
