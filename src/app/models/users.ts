export class Users {
    constructor(
      public nickname : String,
      public passuser:String,
      public tipouser:String,
      public idenuser:String,
      public primenom: String,
      public primeape : String,
      public email :String
    ){}
}

export class Login {
  constructor(
    public nickname:String,
    public passuser:String

  ){}
}