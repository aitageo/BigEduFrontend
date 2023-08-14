import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  @Output() allMarkersChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  private addAllMarkers(map: L.Map): void {

    this.allMarkersChange.emit(this.AllMarkers);
  }

  private AllMarkers: any[] = [];
  public imageUrlBase = '../../assets/img/escudos/';
  public imageUrls = [
    '../../assets/img/escudos/AbrahanReyes.png',
    '../../assets/img/escudos/AlfonsoMoraNaranjo.png',
    '../../assets/img/escudos/PresbiteroBernardoMontoyaGiraldo.png',
    '../../assets/img/escudos/JoseMiguelDeRestrepoYPuerta.png',
    '../../assets/img/escudos/AnaDeCastrillon.png',
    '../../assets/img/escudos/antonioderka.png',
    '../../assets/img/escudos/Alfredocock.png',
    '../../assets/img/escudos/AsambleaDepartamental.png',
    '../../assets/img/escudos/bellohorizonte.png',
    '../../assets/img/escudos/BenjaminHerrera.png',
    '../../assets/img/escudos/BetsabeEspinal.png',
    '../../assets/img/escudos/celetinomutis.png',
    '../../assets/img/escudos/compartir.png',
  
  ];
  


  constructor(private http: HttpClient) { }

  ngOnInit() {
    const map = L.map('map').setView([6.2486069, -75.5742467], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);


    this.addMarkers(map);
  }

  private addMarkers(map: L.Map): void {
    const marker = L.marker([6.354233968597593, -75.4983243959306], {
      icon: L.icon({
        iconUrl: this.imageUrlBase + 'PresbiteroBernardoMontoyaGiraldo.png',
        iconSize: [60, 70],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map)

    marker.bindPopup(`Institución Educativa Presbítero Bernardo Montoya Giraldo`);
    marker.on('mouseover', (e) => {
      marker.openPopup();
    })
    marker.on('mouseout', (e) => {
      marker.closePopup();
    });
    // fin

    const marker2 = L.marker([6.3465208464172065, -75.50386822107099], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/JoseMiguelDeRestrepoYPuerta.png',
        iconSize: [50, 60],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker2.bindPopup(`Institución Educativa José Miguel de Restrepo y Puerta`);
    marker2.on('mouseover', (e) => {
      marker2.openPopup();
    });
    marker2.on('mouseout', (e) => {
      marker2.closePopup();
    });


    //
    const marker3 = L.marker([6.346987829036584, -75.55276662733901], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/AbrahanReyes.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker3.bindPopup(`Institución Educativa Abrahan Reyes`);
    marker3.on('mouseover', (e) => {
      marker3.openPopup();
    })
    marker3.on('mouseout', (e) => {
      marker3.closePopup();
    })
    //  
    //inicio
    const marker4 = L.marker([6.271342698590038, -75.556547532882], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/AlfonsoMoraNaranjo.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker4.bindPopup(`Institución Educativa Alfonso Mora Naranjo`);
    marker4.on('mouseover', (e) => {
      marker4.openPopup();
    })
    marker4.on('mouseout', (e) => {
      marker4.closePopup();
    })
    //Fin   

    //inicio
    const marker5 = L.marker([6.238524665498928, -75.56262297195649], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/AnaDeCastrillon.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker5.bindPopup(`Institución Educativa Ana de Castrillon`);
    marker5.on('mouseover', (e) => {
      marker5.openPopup();
    })
    marker5.on('mouseout', (e) => {
      marker5.closePopup();
    })
    //Fin



    //inicio
    const marker6
      = L.marker([6.296820055366712, -75.53849172308296], {
        icon: L.icon({
          iconUrl: '../../assets/img/escudos/antonioderka.png',
          iconSize: [80, 90],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
        })
      }).addTo(map);

    marker6.bindPopup(`Institución Educativa Antonio Derka`);
    marker6.on('mouseover', (e) => {
      marker6.openPopup();
    })
    marker6.on('mouseout', (e) => {
      marker6.closePopup();
    })
    //Fin


    //inicio
    const marker8 = L.marker([6.296709127267763, -75.57299907726852], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/Alfredocock.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker8.bindPopup(`Institución Educativa Alfredo Cock Arango`);
    marker8.on('mouseover', (e) => {
      marker8.openPopup();
    })
    marker8.on('mouseout', (e) => {
      marker8.closePopup();
    })
    //Fin


    //inicio
    const marker9 = L.marker([6.211488113267962, -75.6022394543276], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/antonioricaurte.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker9.bindPopup(`Institución Educativa Antonio Ricaurte`);
    marker9.on('mouseover', (e) => {
      marker9.openPopup();
    })
    marker9.on('mouseout', (e) => {
      marker9.closePopup();
    })
    //Fin

    //inicio
    const marker10 = L.marker([6.238740234435288, -75.54994466468776], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/AsambleaDepartamental.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker10.bindPopup(`Institución Educativa Asamblea Departamental`);
    marker10.on('mouseover', (e) => {
      marker10.openPopup();
    });
    marker10.on('mouseout', (e) => {
      marker10.closePopup();
    });
    //Fin


    //inicio
    const marker11 = L.marker([6.282442630990462, -75.59028040404658], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/bellohorizonte.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker11.bindPopup(`Institución Educativa Bello Horizonte`);
    marker11.on('mouseover', (e) => {
      marker11.openPopup();
    })
    marker11.on('mouseout', (e) => {
      marker11.closePopup();
    })
    //Fin




    //inicio
    const marker12 = L.marker([6.226675180290584, -75.57884678685798], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/BenjaminHerrera.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker12.bindPopup(`Institución Educativa Benjamin Herrera`);
    marker12.on('mouseover', (e) => {
      marker12.openPopup();
    })
    marker12.on('mouseout', (e) => {
      marker12.closePopup();
    })

    this.AllMarkers = [marker, marker2, marker3, marker4, marker4, marker5, marker6, marker8, marker9, marker10, marker11, marker12]
    // console.log(this.AllMarkers);

    //Fin

    //inicio
    const marker13 = L.marker([6.344324482568742, -75.54182706116534], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/BetsabeEspinal.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker13.bindPopup(`Institución Educativa Betsabé Espinal`);
    marker13.on('mouseover', (e) => {
      marker13.openPopup();
    })
    marker13.on('mouseout', (e) => {
      marker13.closePopup();
    })
    //Fin

    //inicio
    const marker14 = L.marker([6.297100204032963, -75.5751282323306], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/CasdJoseMariaEspinosaPrieto.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker14.bindPopup(`Institucion Educativa Casd Jose Maria Espinosa Prieto`);
    marker14.on('mouseover', (e) => {
      marker14.openPopup();
    })
    marker14.on('mouseout', (e) => {
      marker14.closePopup();
    })
    //Fin

    //inicio
    const marker15 = L.marker([6.259142245600558, -75.55678727466072], {
      icon: L.icon({
        iconUrl: '../../assets/img/escudos/celetinomutis.png',
        iconSize: [80, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      })
    }).addTo(map);

    marker15.bindPopup(`Institución Educativa José Celestino Mutis`);
    marker15.on('mouseover', (e) => {
      marker15.openPopup();
    })
    marker15.on('mouseout', (e) => {
      marker15.closePopup();
    })
    //Fin

    // //inicio
    // const marker16 = L.marker([6.1868816553993, -75.64820562864142], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/compartir.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker16.bindPopup(`Institución educativa compartir`);
    // marker16.on('mouseover', (e) => {
    //   marker16.openPopup();
    // })
    // marker16.on('mouseout', (e) => {
    //   marker16.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker17 = L.marker([6.258512351250751, -75.60024351145617], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/ConcejodeMedellin.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker17.bindPopup(`Institución Educativa Concejo de Medellín (I.E.C.M)`);
    // marker17.on('mouseover', (e) => {
    //   marker17.openPopup();
    // })
    // marker17.on('mouseout', (e) => {
    //   marker17.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker18 = L.marker([6.168620494902361, -75.6431099850474], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/ConcejoMunicipalDeItagui.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker18.bindPopup(`Institución Educativa Concejo Municipal de Itagüí`);
    // marker18.on('mouseover', (e) => {
    //   marker18.openPopup();
    // })
    // marker18.on('mouseout', (e) => {
    //   marker18.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker19 = L.marker([6.178023323978773, -75.64090461514641], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/Corvide.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker19.bindPopup(`IED Fé Y Alegría Corvide`);
    // marker19.on('mouseover', (e) => {
    //   marker19.openPopup();
    // })
    // marker19.on('mouseout', (e) => {
    //   marker19.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker20 = L.marker([6.184769788870751, -75.5981056635919], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/EnriqueVelezEscobar.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker20.bindPopup(`Institucion educativa Enrique Vélez Escobar`);
    // marker20.on('mouseover', (e) => {
    //   marker20.openPopup();
    // })
    // marker20.on('mouseout', (e) => {
    //   marker20.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker21 = L.marker([6.174736859757793, -75.63217302553247], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/EstebanOchoa.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker21.bindPopup(`Institución Educativa Esteban Ochoa`);
    // marker21.on('mouseover', (e) => {
    //   marker21.openPopup();
    // })
    // marker21.on('mouseout', (e) => {
    //   marker21.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker22 = L.marker([6.298858740220659, -75.54891263844605], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/FedericoCarrasquilla.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker22.bindPopup(`I. E. Federico Carrasquilla`);
    // marker22.on('mouseover', (e) => {
    //   marker22.openPopup();
    // })
    // marker22.on('mouseout', (e) => {
    //   marker22.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker23 = L.marker([6.241034342025335, -75.54626543844634], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/FelixHenaoBotero.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker23.bindPopup(`Institución Educativa Félix Henao Botero`);
    // marker23.on('mouseover', (e) => {
    //   marker23.openPopup();
    // })
    // marker23.on('mouseout', (e) => {
    //   marker23.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker24 = L.marker([6.293140905825296, -75.54734486728105], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/feyalegriavarias.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker24.bindPopup(`Institucion educativa fe y alegria`);
    // marker24.on('mouseover', (e) => {
    //   marker24.openPopup();
    // })
    // marker24.on('mouseout', (e) => {
    //   marker24.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker25 = L.marker([6.283859716883433, -75.56216487524158], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/GilbertoAlzateAvendañocopia.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker25.bindPopup(`Institución Educativa Gilberto Alzate`);
    // marker25.on('mouseover', (e) => {
    //   marker25.openPopup();
    // })
    // marker25.on('mouseout', (e) => {
    //   marker25.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker26 = L.marker([6.2396752687910615, -75.54872937097117], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/GonzaloRestrepoJaramillo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker26.bindPopup(`Institución Educativa Gonzalo Restrepo Jaramillo`);
    // marker26.on('mouseover', (e) => {
    //   marker26.openPopup();
    // })
    // marker26.on('mouseout', (e) => {
    //   marker26.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker27 = L.marker([6.35778093643616, -75.50474541145559], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/granizada.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker27.bindPopup(`Institucion educativa rural Granizada`);
    // marker27.on('mouseover', (e) => {
    //   marker27.openPopup();
    // })
    // marker27.on('mouseout', (e) => {
    //   marker27.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker28 = L.marker([6.375335955862632, -75.48670996912549], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/granjas.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker28.bindPopup(`I.E.R. GRANJAS INFANTILES`);
    // marker28.on('mouseover', (e) => {
    //   marker28.openPopup();
    // })
    // marker28.on('mouseout', (e) => {
    //   marker28.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker29 = L.marker([6.287072937198644, -75.54998700534030], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/Guadalupe.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker29.bindPopup(`Institución Educativa Villa Guadalupe`);
    // marker29.on('mouseover', (e) => {
    //   marker29.openPopup();
    // })
    // marker29.on('mouseout', (e) => {
    //   marker29.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker30 = L.marker([6.348511665419928, -75.5652972519408], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/HernanVillaBaenacopia.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker30.bindPopup(`Institución Educativa Hernán Villa Baena`);
    // marker30.on('mouseover', (e) => {
    //   marker30.openPopup();
    // })
    // marker30.on('mouseout', (e) => {
    //   marker30.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker31 = L.marker([6.241326494426621, -75.60937975621201], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/icolven.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker31.bindPopup(`Instituto Colombo Venezolano.`);
    // marker31.on('mouseover', (e) => {
    //   marker31.openPopup();
    // })
    // marker31.on('mouseout', (e) => {
    //   marker31.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker32 = L.marker([6.206710114917551, -75.57740165378647], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/inem.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker32.bindPopup(`Institución Educativa Inem José Félix de Restrepo`);
    // marker32.on('mouseover', (e) => {
    //   marker32.openPopup();
    // })
    // marker32.on('mouseout', (e) => {
    //   marker32.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker33 = L.marker([6.2681257583170025, -75.56471704213601], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/javieralondono.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker33.bindPopup(`Institución Educativa Javiera Londoño`);
    // marker33.on('mouseover', (e) => {
    //   marker33.openPopup();
    // })
    // marker33.on('mouseout', (e) => {
    //   marker33.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker34 = L.marker([6.291150006726106, -75.57487099980581], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/jesusmariaelrosal.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker34.bindPopup(`I.E. Jesús María El Rosal`);
    // marker34.on('mouseover', (e) => {
    //   marker34.openPopup();
    // })
    // marker34.on('mouseout', (e) => {
    //   marker34.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker35 = L.marker([6.2835356594677965, -75.59201534582569], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/jesusrey.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker35.bindPopup(`Institucion educativa Jesús Rey`);
    // marker35.on('mouseover', (e) => {
    //   marker35.openPopup();
    // })
    // marker35.on('mouseout', (e) => {
    //   marker35.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker36 = L.marker([6.163688829260998, -75.62352479611683], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/JohnFKennedy.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker36.bindPopup(`Institucion educativa John F. Kennedy`);
    // marker36.on('mouseover', (e) => {
    //   marker36.openPopup();
    // })
    // marker36.on('mouseout', (e) => {
    //   marker36.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker37 = L.marker([6.337345712309467, -75.55847524213564], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/JorgeEliecerGaitan.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker37.bindPopup(`Institución Educativa Jorge Eliécer Gaitán Ayala`);
    // marker37.on('mouseover', (e) => {
    //   marker37.openPopup();
    // })
    // marker37.on('mouseout', (e) => {
    //   marker37.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker38 = L.marker([6.276943096979847, -75.59667400038674], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/jorgerobledo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker38.bindPopup(`Institución Educativa Jorge Robledo`);
    // marker38.on('mouseover', (e) => {
    //   marker38.openPopup();
    // })
    // marker38.on('mouseout', (e) => {
    //   marker38.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker39 = L.marker([6.202530186187407, -75.58945548077662], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/JoseAcevedoYGomez.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker39.bindPopup(`Institucion educativa Jose Acevedo Y Gomez`);
    // marker39.on('mouseover', (e) => {
    //   marker39.openPopup();
    // })
    // marker39.on('mouseout', (e) => {
    //   marker39.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker40 = L.marker([6.275200997480833, -75.62673225805673], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/JoseHoracioBetancur.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker40.bindPopup(`Institucion educativa Jose Horacio Betancur`);
    // marker40.on('mouseover', (e) => {
    //   marker40.openPopup();
    // })
    // marker40.on('mouseout', (e) => {
    //   marker40.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker41 = L.marker([6.220464510164988, -75.59295453475664], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/josemariabernal.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker41.bindPopup(`Institución educativa Jose Maria Bernal`);
    // marker41.on('mouseover', (e) => {
    //   marker41.openPopup();
    // })
    // marker41.on('mouseout', (e) => {
    //   marker41.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker42 = L.marker([6.268694934661989, -75.55358105990166], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/Kennedy.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker42.bindPopup(`Colegio Institución Educativa Kennedy`);
    // marker42.on('mouseover', (e) => {
    //   marker42.openPopup();
    // })
    // marker42.on('mouseout', (e) => {
    //   marker42.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker43 = L.marker([6.293183941617176, -75.57652971572655], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/laesperanza.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker43.bindPopup(`Institucion Educativa La Esperanza`);
    // marker43.on('mouseover', (e) => {
    //   marker43.openPopup();
    // })
    // marker43.on('mouseout', (e) => {
    //   marker43.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker44 = L.marker([6.252905828938162, -75.62260128504697], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/LaIndependencia.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker44.bindPopup(`Institucion educativa La Independencia`);
    // marker44.on('mouseover', (e) => {
    //   marker44.openPopup();
    // })
    // marker44.on('mouseout', (e) => {
    //   marker44.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker45 = L.marker([6.34272845696151, -75.56033568873626], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/LaMilagrosa.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker45.bindPopup(`Institución Educativa La Milagrosa`);
    // marker45.on('mouseover', (e) => {
    //   marker45.openPopup();
    // })
    // marker45.on('mouseout', (e) => {
    //   marker45.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker46 = L.marker([6.235345374273181, -75.55482886485576], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/LaMilagrosamedellin.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker46.bindPopup(`Institución Educativa La Milagrosa`);
    // marker46.on('mouseover', (e) => {
    //   marker46.openPopup();
    // })
    // marker46.on('mouseout', (e) => {
    //   marker46.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker47 = L.marker([6.276063190847666, -75.56024829611614], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/lourdes.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker47.bindPopup(`Colegio Nuestra Señora De Lourdes`);
    // marker47.on('mouseover', (e) => {
    //   marker47.openPopup();
    // })
    // marker47.on('mouseout', (e) => {
    //   marker47.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker48 = L.marker([6.246145510370243, -75.59853288320211], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/LucrecioJaramilloVelez.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker48.bindPopup(`Institución Educativa Lucrecio Jaramillo Vélez`);
    // marker48.on('mouseover', (e) => {
    //   marker48.openPopup();
    // })
    // marker48.on('mouseout', (e) => {
    //   marker48.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker49 = L.marker([6.235459074238372, -75.55057879980612], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/madrelaura.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker49.bindPopup(`Institucion educativa Madre Laura`);
    // marker49.on('mouseover', (e) => {
    //   marker49.openPopup();
    // })
    // marker49.on('mouseout', (e) => {
    //   marker49.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker50 = L.marker([6.183738822831423, -75.65809153544019], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/ManuelJBetancur.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker50.bindPopup(`Institución Educativa Manuel J. Betancur`);
    // marker50.on('mouseover', (e) => {
    //   marker50.openPopup();
    // })
    // marker50.on('mouseout', (e) => {
    //   marker50.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker51 = L.marker([6.434556428579178, -75.3267468445608], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/ManuelJoseCaicedo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker51.bindPopup(`Institución Educativa Manuel José Caicedo`);
    // marker51.on('mouseover', (e) => {
    //   marker51.openPopup();
    // })
    // marker51.on('mouseout', (e) => {
    //   marker51.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker52 = L.marker([6.1784760581197915, -75.60291028504739], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/Mari.EPoussepin.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker52.bindPopup(`Institucion educativa María Jesús Mejía`);
    // marker52.on('mouseover', (e) => {
    //   marker52.openPopup();
    // })
    // marker52.on('mouseout', (e) => {
    //   marker52.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker53 = L.marker([6.292461343103865, -75.54546922378944], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/MariaDeLosAngelesCano.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker53.bindPopup(`Institución Educativa María de Los Ángeles Cano`);
    // marker53.on('mouseover', (e) => {
    //   marker53.openPopup();
    // })
    // marker53.on('mouseout', (e) => {
    //   marker53.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker54 = L.marker([6.189050453619328, -75.61668208262161], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/MariaJosefaEscobar.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker54.bindPopup(`Institucion educativa María Josefa Escobar`);
    // marker54.on('mouseover', (e) => {
    //   marker54.openPopup();
    // })
    // marker54.on('mouseout', (e) => {
    //   marker54.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker55 = L.marker([6.288150886625294, -75.57192693660124], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/mariamontesori.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker55.bindPopup(`Institucion educativa Maria Montessori`);
    // marker55.on('mouseover', (e) => {
    //   marker55.openPopup();
    // })
    // marker55.on('mouseout', (e) => {
    //   marker55.closePopup();
    // })
    // //Fin

    // //inicio
    // const marker56 = L.marker([6.2785326899857035, -75.54520019669691], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/MontecarloGuillermoGaviriaCorrea.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker56.bindPopup(`Institucion educativa Montecarlo Guillermo Gaviria Correa`);
    // marker56.on('mouseover', (e) => {
    //   marker56.openPopup();
    // })
    // marker56.on('mouseout', (e) => {
    //   marker56.closePopup();
    // })
    // //Fin

    // // inicio
    // const marker57 = L.marker([6.346137126226118, -75.53023333193741], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/navarra.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker57.bindPopup(`Institución Educativa la Navarra`);
    // marker57.on('mouseover', (e) => {
    //   marker57.openPopup();
    // })
    // marker57.on('mouseout', (e) => {
    //   marker57.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker58 = L.marker([6.298968039117126, -75.54586144825132], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/nuevohorizonte.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker58.bindPopup(`Institucion educativa Nuevo Horizonte`);
    // marker58.on('mouseover', (e) => {
    //   marker58.openPopup();
    // })
    // marker58.on('mouseout', (e) => {
    //   marker58.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker59 = L.marker([6.215168072455081, -75.58445139427162], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/octaviocalderon.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker59.bindPopup(`Institucion educativa Octavio Calderón Mejía`);
    // marker59.on('mouseover', (e) => {
    //   marker59.openPopup();
    // })
    // marker59.on('mouseout', (e) => {
    //   marker59.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker60 = L.marker([6.222505578198826, -75.5949107255323], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/OctavioHarry.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker60.bindPopup(`Institución Educativa Octavio Harry`);
    // marker60.on('mouseover', (e) => {
    //   marker60.openPopup();
    // })
    // marker60.on('mouseout', (e) => {
    //   marker60.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker61 = L.marker([6.264009995049946, -75.54726246174657], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/PabloVI.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker61.bindPopup(`Colegio Pablo VI`);
    // marker61.on('mouseover', (e) => {
    //   marker61.openPopup();
    // })
    // marker61.on('mouseout', (e) => {
    //   marker61.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker62 = L.marker([6.166213795314706, -75.6122799286416], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/PaulaMontal.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker62.bindPopup(`Colegio Paula Montal`);
    // marker62.on('mouseover', (e) => {
    //   marker62.openPopup();
    // })
    // marker62.on('mouseout', (e) => {
    //   marker62.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker63 = L.marker([6.290864049229896, -75.57081256359133], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/PedroClaver.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker63.bindPopup(`Institución Educativa Pedro Claver Aguirre`);
    // marker63.on('mouseover', (e) => {
    //   marker63.openPopup();
    // })
    // marker63.on('mouseout', (e) => {
    //   marker63.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker64 = L.marker([6.190897855289416, -75.58829094213647], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/PedroEstrada.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker64.bindPopup(`Institución educativa Pedro Estrada`);
    // marker64.on('mouseover', (e) => {
    //   marker64.openPopup();
    // })
    // marker64.on('mouseout', (e) => {
    //   marker64.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker65 = L.marker([6.222153150124391, -75.60990570223194], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/pedrooctavioamado.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker65.bindPopup(`Institución Educativa Pedro Octavio Amado`);
    // marker65.on('mouseover', (e) => {
    //   marker65.openPopup();
    // })
    // marker65.on('mouseout', (e) => {
    //   marker65.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker66 = L.marker([6.270603269503471, -75.5528631415552], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/Pedro_Luis_Villa.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker66.bindPopup(`Colegio Pedro Luis Villa`);
    // marker66.on('mouseover', (e) => {
    //   marker66.openPopup();
    // })
    // marker66.on('mouseout', (e) => {
    //   marker66.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker67 = L.marker([6.286974622721625, -75.54013371941639], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/pequenamaria.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker67.bindPopup(`Institucion educativa pequeña Maria`);
    // marker67.on('mouseover', (e) => {
    //   marker67.openPopup();
    // })
    // marker67.on('mouseout', (e) => {
    //   marker67.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker68 = L.marker([6.1867813900215145, -75.64740155563152], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/pradito.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker68.bindPopup(`Institución Educativa Pradito`);
    // marker68.on('mouseover', (e) => {
    //   marker68.openPopup();
    // })
    // marker68.on('mouseout', (e) => {
    //   marker68.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker69 = L.marker([6.301653957708155, -75.55896422495096], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/PresbiteroAntonioJoseBernal.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker69.bindPopup(`Institucion educativa Presbítero Antonio José Bernal Londoño`);
    // marker69.on('mouseover', (e) => {
    //   marker69.openPopup();
    // })
    // marker69.on('mouseout', (e) => {
    //   marker69.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker70 = L.marker([6.31237904021821, -75.57450958077601], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/RaquelJaramillo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker70.bindPopup(`Centro Educativo Raquel Jaramillo`);
    // marker70.on('mouseover', (e) => {
    //   marker70.openPopup();
    // })
    // marker70.on('mouseout', (e) => {
    //   marker70.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker71 = L.marker([6.281733682136259, -75.53853578689167], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/ReinodeBelgica.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker71.bindPopup(`Institución educativa Reino de Belgica`);
    // marker71.on('mouseover', (e) => {
    //   marker71.openPopup();
    // })
    // marker71.on('mouseout', (e) => {
    //   marker71.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker72 = L.marker([6.2887285363821235, -75.54188983660131], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SagradaFamiliaAldeaPabloVI.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker72.bindPopup(`Colegio Sagrada Familia Aldea Pablo VI`);
    // marker72.on('mouseover', (e) => {
    //   marker72.openPopup();
    // })
    // marker72.on('mouseout', (e) => {
    //   marker72.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker73 = L.marker([6.235875866263627, -75.56336856174673], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/salvador.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker73.bindPopup(`Institucion educativa El Salvador`);
    // marker73.on('mouseover', (e) => {
    //   marker73.openPopup();
    // })
    // marker73.on('mouseout', (e) => {
    //   marker73.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker74 = L.marker([6.280823702543081, -75.63603100776628], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanCristobal.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker74.bindPopup(`Institucion educativa San Cristóbal`);
    // marker74.on('mouseover', (e) => {
    //   marker74.openPopup();
    // })
    // marker74.on('mouseout', (e) => {
    //   marker74.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker75 = L.marker([6.3398850213668165, -75.60868432310586], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanFelix.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker75.bindPopup(`Institución Educativa San Felix`);
    // marker75.on('mouseover', (e) => {
    //   marker75.openPopup();
    // })
    // marker75.on('mouseout', (e) => {
    //   marker75.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker76 = L.marker([6.238515138607389, -75.53875573902721], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanFranciscoDeAsis.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker76.bindPopup(`Institucion Educativa San Fransisco De Asis`);
    // marker76.on('mouseover', (e) => {
    //   marker76.openPopup();
    // })
    // marker76.on('mouseout', (e) => {
    //   marker76.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker77 = L.marker([6.178094224357758, -75.66056154271733], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanJoseObrero.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker77.bindPopup(`Institución Educativa San José Obrero`);
    // marker77.on('mouseover', (e) => {
    //   marker77.openPopup();
    // })
    // marker77.on('mouseout', (e) => {
    //   marker77.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker78 = L.marker([6.272067198381689, -75.54824656174648], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/sanlorenzo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker78.bindPopup(`Institucion educativa San Lorenzo`);
    // marker78.on('mouseover', (e) => {
    //   marker78.openPopup();
    // })
    // marker78.on('mouseout', (e) => {
    //   marker78.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker79 = L.marker([6.344445677462009, -75.51544559242596], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanLuisGonzaga.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker79.bindPopup(`Institución Educativa San Luis Gonzaga`);
    // marker79.on('mouseover', (e) => {
    //   marker79.openPopup();
    // })
    // marker79.on('mouseout', (e) => {
    //   marker79.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker80 = L.marker([6.28867959353445, -75.54759363728452], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SanPablo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker80.bindPopup(`Institucion educativa San Pablo`);
    // marker80.on('mouseover', (e) => {
    //   marker80.openPopup();
    // })
    // marker80.on('mouseout', (e) => {
    //   marker80.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker81 = L.marker([6.281253060171613, -75.58452832864089], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SantaBertillaBoscardin.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker81.bindPopup(`Colegio Santa Bertilla Boscardin`);
    // marker81.on('mouseover', (e) => {
    //   marker81.openPopup();
    // })
    // marker81.on('mouseout', (e) => {
    //   marker81.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker82 = L.marker([6.339365331882428, -75.55555210961082], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/santacatalina.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker82.bindPopup(`Institucion educativa Santa Catalina`);
    // marker82.on('mouseover', (e) => {
    //   marker82.openPopup();
    // })
    // marker82.on('mouseout', (e) => {
    //   marker82.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker83 = L.marker([6.38264087801837, -75.48867290038618], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/santaleoni.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker83.bindPopup(`Colegio Santa Leoní Aviat`);
    // marker83.on('mouseover', (e) => {
    //   marker83.openPopup();
    // })
    // marker83.on('mouseout', (e) => {
    //   marker83.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker84 = L.marker([6.2451315319565515, -75.54028930776644], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/SoldeOriente.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker84.bindPopup(`Institucion educativa Sol de Oriente`);
    // marker84.on('mouseover', (e) => {
    //   marker84.openPopup();
    // })
    // marker84.on('mouseout', (e) => {
    //   marker84.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker85 = L.marker([6.181265956006635, -75.58309772495163], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/teresiano.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker85.bindPopup(`Institucion educativa Teresiano`);
    // marker85.on('mouseover', (e) => {
    //   marker85.openPopup();
    // })
    // marker85.on('mouseout', (e) => {
    //   marker85.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker86 = L.marker([6.325250111297936, -75.56034058077601], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/TomasCadavidRestrepo.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker86.bindPopup(`Institución Educativa Tomás Cadavid Restrepo`);
    // marker86.on('mouseover', (e) => {
    //   marker86.openPopup();
    // })
    // marker86.on('mouseout', (e) => {
    //   marker86.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker87 = L.marker([6.259303996688496, -75.56560557708647], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/tulioospina.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker87.bindPopup(`Institucion educativa Tulio Ospina`);
    // marker87.on('mouseover', (e) => {
    //   marker87.openPopup();
    // })
    // marker87.on('mouseout', (e) => {
    //   marker87.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker88 = L.marker([6.197830050240796, -75.58969542310662], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/VidaParaTodos.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker88.bindPopup(`institucion educativa Vida Para Todos`);
    // marker88.on('mouseover', (e) => {
    //   marker88.openPopup();
    // })
    // marker88.on('mouseout', (e) => {
    //   marker88.closePopup();
    // })
    // //Fin

    // // inicio 
    // const marker89 = L.marker([6.35151418645458, -75.56687985563062], {
    //   icon: L.icon({
    //     iconUrl: '../../assets/img/escudos/villadelsol.png',
    //     iconSize: [80, 90],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //   })
    // }).addTo(map);

    // marker89.bindPopup(`Institución Educativa Villa del Sol`);
    // marker89.on('mouseover', (e) => {
    //   marker89.openPopup();
    // })
    // marker89.on('mouseout', (e) => {
    //   marker89.closePopup();
    // })
    // //Fin

  }

  // public generateImageTags(): string {
  //   let imageTags = '';
  
  //   this.imageUrls.forEach((imageUrl) => {
  //     imageTags += `<img [lazyLoad]="'${imageUrl}'" [defaultImage]="'assets/placeholder.png'" [alt]="'Icono'">`;
  //   });
  
  //   return imageTags;
  // }
  
}
