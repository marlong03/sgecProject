import { Component, OnInit,ViewChild,Inject} from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-registro-pedidos',
  templateUrl: './registro-pedidos.component.html',
  styleUrls: ['./registro-pedidos.component.css']
})
export class RegistroPedidosComponent implements OnInit {

  listaPedidos : Pedido[] = [];
  listaProductos : Producto[] = [];

  listaPedidosDataSource:any = [];
  listaProductosDataSource:any = [];

  displayBlock = "none";
  displayBlockInsumo = 'none';
  abrirModal(){
    this.displayBlock =   "flex"
  }

  cerrarModal(){
    this.displayBlock =   "none"
  }

  constructor(private pedidoService:PedidoService,
              private productoService:ProductoService) { }

  displayedColumnsPedido:string[] = [
    'idpedido',
    /* 'referenciapedido', */
    'descripcionpedido',
    'destinopedido',
    'detalledestinopedido',
    'valorpedido',
    'observacionpedido',
    /* 'fechapedido',
    'estadopedido', */
    /* 'fk_idusuario', */
    'fk_iddomiciliario',
    'accion'
  ];
  displayedColumnsProducto:string[] = [
    'idproducto',
    'nombreproducto',
    'valorproducto',
    'Cantidad',
    'Acciones',
  ];
  @ViewChild(MatPaginator,{static: true})paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  llenarTablaPedidos(){
    this.pedidoService.getPedidos().subscribe((pedidos:any)=>{
      this.listaPedidos = pedidos;
      this.listaPedidosDataSource = new MatTableDataSource<Pedido>(this.listaPedidos);
      //features table
      this.listaPedidosDataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
      this.listaPedidosDataSource.paginator = this.paginator;
    })
  }
  llenarTablaProductos(){
    this.productoService.getProductos().subscribe((productos:any)=>{
      this.listaProductos = productos;
      this.listaProductosDataSource = new MatTableDataSource<Producto>(this.listaProductos);
      //features table
      this.listaProductosDataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
      this.listaProductosDataSource.paginator = this.paginator;
    })
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.llenarTablaPedidos();
    this.llenarTablaProductos();
  }
  filtrarPedidos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.listaPedidosDataSource.filter = filtro.trim().toLowerCase();
  }  
  filtrarProductos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.listaProductosDataSource.filter = filtro.trim().toLowerCase();
  }  
}



export interface Pedido {
  "idpedido":number,
  "referenciapedido": string,
  "descripcionpedido": string,
  "destinopedido": string,
  "detalledestinopedido":string,
  "valorpedido": string,
  "observacionpedido": string,
  "fk_idusuario": number,
  "estadopedido": string,
  "fechapedido": string,
  "fk_iddomiciliario": number
}
export interface Producto {
  "idproducto": number,
  "nombreproducto": string,
  "valorproducto": number
}



