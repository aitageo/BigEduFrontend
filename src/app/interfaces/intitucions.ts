export interface Intitucions {
    _id: string;
    nombre_institucion: string;
    ubicacion_geografica: {
      latitud: number;
      longitud: number;
    };
    creado_el: Date;
}
