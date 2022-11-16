import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {
  direccionarUrl(url:string){
    this.router.navigate([url])
  }

  nombreCompleto:any = "";
  telefono:any= "";
  email:any= "";
  password:any= "";
  passwordConfirm:any= "";
  codigoEmpresarial:any= "";
  fk_idRol:any = 0;
  crearUsuario(){
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
    console.log(data);
    try{
      this.usuarioService.PostUsuario(data);
      Swal.fire(
        '¡Bravo! Haz creado tu usuario',
        'Ahora podras iniciar sesion',
        'success'
      ).then((x)=>{
        this.direccionarUrl("login")
      })
    }catch(err){
      Swal.fire(
        '¡Ups! No logramos crear tu cuenta 😅',
        'Vuelve a intentarlo',
        'error'
      )
    }
  }
  validarCamposUsuario(){
    //codigo empresarial
    if(this.codigoEmpresarial == "domi"){
      this.fk_idRol = 2;
    } else if(this.codigoEmpresarial == "admin"){
      this.fk_idRol = 1;
    }else{
      Swal.fire(
        '¡Ups! Este codigo Empresarial no es valido 😅',
        'Revisa y vuelve a intentarlo',
        'error'
      )
    }
    if(this.nombreCompleto != ""){
      if(this.telefono != "" && this.telefono.length > 9){
        if(this.email != "" || this.email.includes('@') == true){
          if(this.fk_idRol != 0){
            if(this.password == this.passwordConfirm && this.password.length > 2 ){
              this.crearUsuario()
            }else{
              Swal.fire(
                '¡Ups! Las contraseñas no coinciden 😅',
                'Revisa y vuelve a intentarlo',
                'error'
                )
            }
          }
          }else{
            Swal.fire(
              '¡Ups! Este email no es valido 😅',
              'Revisa y vuelve a intentarlo',
              'error'
            )
          }
          }else{
          Swal.fire(
            '¡Ups! Este telefono no es valido 😅',
            'Revisa y vuelve a intentarlo',
            'error'
          )
        }
    }else{
      Swal.fire(
        '¡Ups! Este nombre no es valido 😅',
        'Revisa y vuelve a intentarlo',
        'error'
      )
    }
  }
  
  constructor(private router:Router,
              private usuarioService:UsuarioService ) { }

  listaUsuarios:any = []
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data:any)=>{
      this.listaUsuarios = data;
    })
  }
}
