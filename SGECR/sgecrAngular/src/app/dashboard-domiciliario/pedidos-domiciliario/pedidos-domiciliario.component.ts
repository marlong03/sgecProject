import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos-domiciliario',
  templateUrl: './pedidos-domiciliario.component.html',
  styleUrls: ['./pedidos-domiciliario.component.css']
})
export class PedidosDomiciliarioComponent implements OnInit {
  constructor(private pedidoService:PedidoService) { }
  title = "";
  usuarioSesion =  JSON.parse(localStorage.getItem("usuario") || "[]")
  idDomiciliario:number = 0;
  listaPedidos:any[] = [];
  pedidoDetalle = {
    "idpedido": 0,
    "referenciapedido": "",
    "descripcionpedido": "",
    "destinopedido": "",
    "detalledestinopedido": "",
    "valorpedido": 0,
    "observacionpedido": "",
    "fk_idusuario": 0,
    "estadopedido": "",
    "fechapedido": "",
    "fk_iddomiciliario": 0
  } ;
  displayModal  = "none";

  traerPedidos(op:string){
    if(op == 'enviado'){
      this.title = "Pedidos Pendientes";
    }
    else if(op == 'entregado'){
      this.title = "Pedidos Entregados";
    }
    this.listaPedidos = [];
    this.pedidoService.getPedidos().subscribe((pedidos:any)=>{
      for(let p of pedidos){
        if(p.fk_iddomiciliario == this.usuarioSesion.idusuario 
          && p.estadopedido.toLowerCase() == op){
          this.listaPedidos.push(p);
        }
      }
    })
  }
  abrirModalDetallePedido(){
    
    if(this.displayModal == "none"){
      this.displayModal  = "block";
    }
    else if(this.displayModal == "block"){
      this.displayModal  = "none";
    }

  }
  escogerPedido(event:any){
    console.log(event.path[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].data);
    let referencia = event.path[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].data;
    this.pedidoService.getPedidoPorReferencia(referencia).subscribe((pedido:any)=>{
      this.pedidoDetalle = pedido;
      console.log(this.pedidoDetalle);
     

    })
  }
  cambiarEstadoPedido(estado:string){
    console.log(estado);
    console.log(this.pedidoDetalle.referenciapedido);
    try {
      this.pedidoService.cambiarEstadoPedido(this.pedidoDetalle.referenciapedido,estado)
      
      Swal.fire(
        '¡Estado actualizado!' ,
        'Nuevo estado del pedido: '+ estado,
        'success'
      ).then((x)=>{
        this.traerPedidos('enviado')
        this.abrirModalDetallePedido()
      })
    } catch (error) {
        console.log("ERROR");
        
    }
    /* .subscribe((pedido:any)=>{
      console.log(pedido);
      
    }) */
  }

  ngOnInit(): void {
    this.traerPedidos('enviado')
  }
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