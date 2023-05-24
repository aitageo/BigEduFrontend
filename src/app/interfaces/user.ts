export interface User {
    Es_Lider: boolean;
    creado_el: string;
    NickName: string;
    PassUser: string;
    TipoUser: string;
    EstaUser: string;
    __v: number;
    token:string;
    _id:string;
    user: DatosUser;//no pasar como array

  }
  
  export interface DatosUser {
    IdenUser: string;
    NombUser: string;
    ApelUser: string;
    EmaiUser: string;
    _id:string;
  }


  
  
      
      