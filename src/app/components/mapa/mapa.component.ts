import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { marker } from 'leaflet';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
      const marker = L.marker([6.354233968597593, -75.4983243959306],{
        icon: L.icon({
          iconUrl: '../assets/img/presbitero.jpg',
          iconSize: [60, 70],
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
          iconSize: [50, 60],
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


//
      const marker3 = L.marker([6.346987829036584, -75.55276662733901],{
        icon: L.icon({
          iconUrl: '../assets/img/escudos/AbrahanReyes.png',
          iconSize: [80, 90],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
        })
      }).addTo(map);

      marker3.bindPopup(`Institución Educativa Abrahan Reyes`);
      marker3.on('mouseover',(e)=> {
        marker3.openPopup();
      })
      marker3.on('mouseout',(e)=> {
        marker3.closePopup();
      })
//  
 //inicio
 const marker4 = L.marker([6.271342698590038, -75.556547532882],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/AlfonsoMoraNaranjo.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker4.bindPopup(`Institución Educativa Alfonso Mora Naranjo`);
marker4.on('mouseover',(e)=> {
  marker4.openPopup();
})
marker4.on('mouseout',(e)=> {
  marker4.closePopup();
})
//Fin   

 //inicio
 const marker5 = L.marker([6.238524665498928, -75.56262297195649],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/AnaDeCastrillon.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker5.bindPopup(`Institución Educativa Ana de Castrillon`);
marker5.on('mouseover',(e)=> {
  marker5.openPopup();
})
marker5.on('mouseout',(e)=> {
  marker5.closePopup();
})
//Fin



 //inicio
 const marker6
  = L.marker([6.296820055366712, -75.53849172308296],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/antonioderka.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker6.bindPopup(`Institución Educativa Antonio Derka`);
marker6.on('mouseover',(e)=> {
 marker6.openPopup();
})
marker6.on('mouseout',(e)=> {
  marker6.closePopup();
})
//Fin


 //inicio
 const marker8 = L.marker([6.296709127267763, -75.57299907726852],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/Alfredocock.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

 marker8.bindPopup(`Institución Educativa Alfredo Cock Arango`);
marker8.on('mouseover',(e)=> {
  marker8.openPopup();
})
marker8.on('mouseout',(e)=> {
  marker8.closePopup();
})
//Fin


 //inicio
 const marker9 = L.marker([6.211488113267962, -75.6022394543276],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/antonioricaurte.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker9.bindPopup(`Institución Educativa Antonio Ricaurte`);
marker9.on('mouseover',(e)=> {
  marker9.openPopup();
})
marker9.on('mouseout',(e)=> {
  marker9.closePopup();
})
//Fin

 //inicio
 const marker10 = L.marker([6.238740234435288, -75.54994466468776],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/AsambleaDepartamental.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker10.bindPopup(`Institución Educativa Asamblea Departamental`);
marker10.on('mouseover',(e)=> {
  marker10.openPopup();
})
marker10.on('mouseout',(e)=> {
  marker10.closePopup();
})
//Fin


 //inicio
 const marker11 = L.marker([6.282442630990462, -75.59028040404658],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/bellohorizonte.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker11.bindPopup(`Institución Educativa Bello Horizonte`);
marker11.on('mouseover',(e)=> {
  marker11.openPopup();
})
marker11.on('mouseout',(e)=> {
  marker11.closePopup();
})
//Fin



 //inicio
 const marker12 = L.marker([6.226675180290584, -75.57884678685798],{
  icon: L.icon({
    iconUrl: '../assets/img/escudos/BenjaminHerrera.png',
    iconSize: [80, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })
}).addTo(map);

marker12.bindPopup(`Institución Educativa Benjamin Herrera`);
marker12.on('mouseover',(e)=> {
  marker12.openPopup();
})
marker12.on('mouseout',(e)=> {
  marker12.closePopup();
})
//Fin

        
}


}


 


 
  
  



