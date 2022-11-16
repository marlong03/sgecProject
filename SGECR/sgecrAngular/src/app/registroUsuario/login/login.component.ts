import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  direccionarUrl(url:string){
    this.router.navigate([url])
  }
  email:any;
  password:any;
  loginUsuario(){
    this.usuarioService.validarUsuario(this.email,this.password).subscribe((data:any)=>{
      console.log(data);
      if(data != null){
        localStorage.clear()
        localStorage.setItem("usuario",JSON.stringify(data))
        if(data.codigoempresarial.toLowerCase() == "admin"){
          this.router.navigate(['dashboardAdmin'])
        }
        else if(data.codigoempresarial == "domi"){
          this.router.navigate(['dashboardDomi'])
        }

      }else{
        Swal.fire(
          '¡Ups! Algo escribiste mal 😅',
          'Revisa y vuelve a intentarlo',
          'error'
        ).then((x)=>{
          this.email = "";
          this.password = "";
        })
      }
    })
  }
  constructor(private router:Router,
              private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

}
