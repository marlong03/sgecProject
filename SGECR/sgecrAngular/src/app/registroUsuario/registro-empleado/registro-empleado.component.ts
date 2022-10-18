import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {
  direccionarUrl(url:string){
    this.router.navigate([url])
  }


  nombreCompleto:any;
  telefono:any;
  email:any;
  password:any;
  passwordConfirm:any;
  codigoEmpresarial:any;
  fk_idRol:any = 0;
  crearUsuario(){

    if(this.codigoEmpresarial == "domi"){
      this.fk_idRol = 2;
    } else if(this.codigoEmpresarial == "admin"){
      this.fk_idRol = 1;
    }else{
      alert("LO SENTIMOS ESTE CODIGO EMPRESARIAL NO ES VALIDO");
    }
    if(this.fk_idRol != 0){
      if(this.password == this.passwordConfirm  ){
        let data = {
          idusuario: 0,
          nombreusuario: this.nombreCompleto,
          telefonousuario: this.telefono,
          emailusuario: this.email,
          contrasenausuario: this.passwordConfirm,
          estadousuario: 1,
          codigoempresarial: this.codigoEmpresarial,
          direccionusuario: "",
          fk_idrol: this.fk_idRol
        }
        /* let data = {
          "idusuario": 0,
          "nombreusuario": "domiciliario4",
          "telefonousuario": 64565,
          "emailusuario": "domiciliario4@gmail.com",
          "contrasenausuario": "Domiciliario4",
          "estadousuario": 1,
          "codigoempresarial": "domi",
          "direccionusuario":"",
          "fk_idrol": 2
        } */
        
        console.log(data);
        try{

          this.usuarioService.PostUsuario(data);
          alert("SE CREO EL USUARIO")
          this.direccionarUrl("login")
        }catch(err){
          console.log("ERRORRR AQUI");
          
        }
      }else{
        alert("LAS CONTRASEÑAS NO SON IGUALES PORFAVOR VUELVE A INTENTARLO")
      }
  }

      
    }


  constructor(private router:Router,
              private usuarioService:UsuarioService ) { }

  listaUsuarios:any = []
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data:any)=>{
      this.listaUsuarios = data
    })
    
    
  }

}
