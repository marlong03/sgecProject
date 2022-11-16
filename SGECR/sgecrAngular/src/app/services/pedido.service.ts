import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  getPedidos():any{
    return this.http.get("http://localhost:8080/pedido/all");
  }
  getPedidoPorReferencia(referencia:string):any{
    return this.http.get("http://localhost:8080/pedido/referencia/"+ referencia);
  }
  asignarDomiciliario(referencia:any,nombreDomiciliario:any):any{
      this.http.get("http://localhost:8080/pedido/asignardomiciliario/" + referencia.replace(/ /g,'') + "/" + nombreDomiciliario).subscribe((z:any)=>{
        console.log(z);
      });
  } 
  cancelarPedido(referencia:any){
    this.http.get("http://localhost:8080/pedido/cancelarpedido/" + referencia.replace(/ /g,'')).subscribe((z:any)=>{
        console.log(z);
      });
  }
  enviarPedido(referencia:any){
    this.http.get("http://localhost:8080/pedido/enviarpedido/" + referencia.replace(/ /g,'')).subscribe((z:any)=>{
        console.log(z);
      });
  }
  cambiarEstadoPedido(referencia:string,estado:string){
    this.http.get("http://localhost:8080/pedido/estado/" + referencia.replace(/ /g,'') + "/" + estado).subscribe((z:any)=>{
        console.log(z);
      });
  }
   PostPedido(data:Pedido):any{
    return this.http.post<Pedido>("http://localhost:8080/pedido/new",data).subscribe((x:any) => {
      console.log(x)
    });
  }
  constructor(private http:HttpClient) { }
}
interface Pedido{
    "idpedido": number,
    "referenciapedido": string,
    "descripcionpedido": string,
    "destinopedido": string,
    "detalledestinopedido": string,
    "valorpedido": number,
    "observacionpedido": string,
    "fk_idusuario": number,
    "estadopedido": string,
    "fechapedido": string,
    "fk_iddomiciliario": number
}