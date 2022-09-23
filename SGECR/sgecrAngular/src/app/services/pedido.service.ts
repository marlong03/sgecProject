import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  getPedidos():any{
    return this.http.get("http://localhost:8080/pedido/all");
  }
 
   /* PostUsuario(data:Usuario):any{
    return this.http.post<Usuario>("http://localhost:8080/usuario/new",data).subscribe((x:any) => {
      console.log(x)
    }); */
    constructor(private http:HttpClient) { }
  }

