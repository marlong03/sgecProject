import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent implements OnInit {
  direccionarUrl(url:string){
    this.router.navigate([url])
  }
  email:any;
  password:any;
  loginUsuario(){
    this.usuarioService.validarUsuario(this.email,this.password).subscribe((data:any)=>{
      console.log(data);
      if(data != null){
        localStorage.setItem("usuario",JSON.stringify(data))
        
        this.router.navigate(['dashboardAdmin'])

      }else{
        alert("UPS, NO TE ENCONTRAMOS")
      }
    })
  }
  constructor(private router:Router,
              private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

}
