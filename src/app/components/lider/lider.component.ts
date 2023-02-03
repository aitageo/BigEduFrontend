import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

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
  }

  destroyToken(){
    this.userservice.destroyToken()
    }




}
