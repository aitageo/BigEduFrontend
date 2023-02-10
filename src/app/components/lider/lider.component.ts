import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'

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

  Modal(e:any){
    e.preventDefault()
    alert("pinchaste")
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
