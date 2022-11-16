import { Component, OnInit,ViewChild,Inject, Input} from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-pedido-principal-replica',
  templateUrl: './registro-pedido-principal-replica.component.html',
  styleUrls: ['./registro-pedido-principal-replica.component.css']
})
export class RegistroPedidoPrincipalReplicaComponent implements OnInit {


  seleccionarDomiciliario:string = "";
  tieneDomiciliario:any = false;
  listaPedidos : Pedido[] = [];
  listaPedidosDataSource:any = [];
  listaDomiciliariosDisponibles:any = [];

  displayedColumnsPedido:string[] = [
    'referenciapedido',
    'descripcionpedido',
    'observacionpedido',
    'destinopedido',
    'detalledestinopedido',
    'valorpedido',
    'fk_iddomiciliario',
    'accion'
  ];

  @ViewChild(MatPaginator,{static: true})paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  //Relleno de tablas para angular material
  /* saberLengthDeLista(op:string){
    let valorRetorno = 0;
    this.pedidoService.getPedidos().subscribe((pedidos:any)=>{

    let subListaPedidos = [];
      for(let pedido of pedidos){
        if(pedido.estadopedido.toLowerCase() == (op).toLowerCase()){
          subListaPedidos.unshift(pedido);
        }
      }
      return subListaPedidos.length
    })
  } */
  llenarTablaPedidos(op:string){
   if(op =="cancelado" || op == "enviado"){
    this.displayedColumnsPedido = [
      'referenciapedido',
      'descripcionpedido',
      'observacionpedido',
      'destinopedido',
      'detalledestinopedido',
      'valorpedido',
      'fk_iddomiciliario',
    ];
   }else{
    this.displayedColumnsPedido = [
      'referenciapedido',
      'descripcionpedido',
      'observacionpedido',
      'destinopedido',
      'detalledestinopedido',
      'valorpedido',
      'fk_iddomiciliario',
      'accion'
    ];
   }
    this.pedidoService.getPedidos().subscribe((pedidos:any)=>{
      let subListaPedidos = [];
      for(let pedido of pedidos){
        if(pedido.estadopedido.toLowerCase() == (op).toLowerCase()){
          subListaPedidos.unshift(pedido);
        }
      }
     this.listaPedidos = subListaPedidos;
     this.listaPedidosDataSource = new MatTableDataSource<Pedido>(this.listaPedidos);
     //features table
     this.listaPedidosDataSource.sort = this.sort;
     this.paginator._intl.itemsPerPageLabel = 'Pedidos por pagina';
     this.listaPedidosDataSource.paginator = this.paginator;
   })
 }
 seleccionarDomiciliarioFunction(event:any){
  let referencia = event.path[3].children[0].childNodes[0].data;
  this.pedidoService.asignarDomiciliario(referencia,this.seleccionarDomiciliario);
  this.llenarTablaPedidos(this.estadoPedidosATraer);
 }
  filtrarPedidos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.listaPedidosDataSource.filter = filtro.trim().toLowerCase();
  } 
  verDomiciliariosDisponibles(){
    this.usuarioService.getDomiciliariosDisponibles().subscribe((domis:any)=>{
      let subListaDomiciliarios = [];
      for(let domiciliario of domis){
        /* if(domiciliario.estadousuario != 0){ */
          subListaDomiciliarios.push(domiciliario);
       /*  } */
      }
      this.listaDomiciliariosDisponibles = subListaDomiciliarios;
      console.log(this.listaDomiciliariosDisponibles);
    })
  }
  /* cancelarPedido(event:any){
    let referencia = event.path[4].childNodes[0].innerText.replace(/ /g,'');
    if(referencia == undefined || referencia.length > 8){
      referencia = event.path[3].childNodes[0].childNodes[0].data.replace(/ /g,'');
    }
    Swal.fire({
      title: '¿Estas seguro que quieres cancelar el pedido?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Regresar',
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Cancelar pedido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoService.cancelarPedido(referencia);
        Swal.fire({
          title: '¡Pedido cancelado!',
          icon: 'success',
        }).then((x)=>{
          this.llenarTablaPedidos(this.estadoPedidosATraer);
        })
      }
    })

  }
  enviarPedido(event:any){
       let referencia = event.path[4].childNodes[0].innerText.replace(/ /g,'');
    if(referencia == undefined || referencia.length > 8){
      referencia = event.path[3].childNodes[0].childNodes[0].data.replace(/ /g,'');
    }
    Swal.fire({
      title: '¿Estas seguro que quieres enviar el pedido?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Regresar',
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Enviar pedido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoService.enviarPedido(referencia);
        Swal.fire({
          title: '¡Pedido enviado!',
          icon: 'success',
        }).then((x)=>{
          this.llenarTablaPedidos(this.estadoPedidosATraer);
        })
      }
    })
  } */
  estadoPedidosATraer = ""; 
  ngOnInit(): void {
   /*  this.estadoPedidosATraer = "pendiente";  */
  }
  ngAfterViewInit(): void {
    /* this.verDomiciliariosDisponibles();
    setTimeout(() => {
      console.log(this.listaPedidos);
    }, 2000); */    
    /* this.llenarTablaPedidos(this.estadoPedidosATraer); */
  }
  constructor(private pedidoService:PedidoService,
              private usuarioService:UsuarioService) { }

}
export interface Pedido {
  "idpedido":number,
  "referenciapedido": string,
  "descripcionpedido": string,
  "destinopedido": string,
  "detalledestinopedido":string,
  "valorpedido": number,
  "observacionpedido": string,
  "fk_idusuario": number,
  "estadopedido": string,
  "fechapedido": string,
  "fk_iddomiciliario": number
}