import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    getUsuarios():any{
      return this.http.get("http://localhost:8080/usuario/all");
    }
    getDomiciliarios():any{
      return this.http.get("http://localhost:8080/usuario/domiciliarios");
    }
    getDomiciliariosDisponibles():any{
      return this.http.get("http://localhost:8080/usuario/domiciliarios/disponibles");
    }
    getUsuarioByNombre(nombre:string):any{
      return this.http.get("http://localhost:8080/usuario/nombre" +'/' + nombre);
    }
    validarUsuario(email:any,password:any):any{
      return this.http.get("http://localhost:8080/usuario/" + email + "/" + password);
    }
     PostUsuario(data:Usuario):any{
      return this.http.post<Usuario>("http://localhost:8080/usuario/new",data).subscribe((x:any) => {
        console.log(x)
      });
    }
  constructor(private http:HttpClient) { }
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

