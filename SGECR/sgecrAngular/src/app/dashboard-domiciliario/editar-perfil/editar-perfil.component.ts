import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuarioSesion = JSON.parse(localStorage.getItem('usuario') || "[]");
  email:string = this.usuarioSesion.emailusuario;
  nombre:string = this.usuarioSesion.nombreusuario;
  telefono:string = this.usuarioSesion.telefonousuario;
  contrasena:string = this.usuarioSesion.contrasenausuario;

  actualizarUsuario(){

    let data:Usuario = {
      "idusuario": this.usuarioSesion.idusuario,
      "nombreusuario": this.nombre,
      "telefonousuario": this.telefono,
      "emailusuario": this.email,
      "contrasenausuario": this.contrasena,
      "estadousuario": this.usuarioSesion.estadousuario,
      "codigoempresarial": this.usuarioSesion.codigoempresarial,
      "direccionusuario": "" ,
      "fk_idrol": 2
      }
    try{
     
      this.usuarioService.PostUsuario(data)
      console.log(data);
      console.log(this.usuarioSesion);
      Swal.fire(
        '¡Bravo! Haz actualizado tu perfil',
        'Por favor vuelve a iniciar sesion',
        'success'
      ).then((x)=>{
        localStorage.removeItem('usuario')
        this.router.navigate(['/']);
      })
      
    }catch(err){

    }
  }
  constructor(private usuarioService:UsuarioService,
              private router:Router)   { }

  ngOnInit(): void {
  }

}
interface Usuario{
  "idusuario": number,
  "nombreusuario": string,
  "telefonousuario": string,
  "emailusuario": string,
  "contrasenausuario": string,
  "estadousuario": number,
  "codigoempresarial": string,
  "direccionusuario": string ,
  "fk_idrol": number
  }
