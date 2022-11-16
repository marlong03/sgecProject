import { Component, OnInit,ViewChild,Inject, ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-anadir-pedido-replica',
  templateUrl: './anadir-pedido-replica.component.html',
  styleUrls: ['./anadir-pedido-replica.component.css']
})
export class AnadirPedidoReplicaComponent implements OnInit {

  aparecerSeccionOrdenPedido = false;
  habilitarBtnCrearPedido = false;
  //Arreglos para tablas AngularMaterial
  listaPedidos : Pedido[] = [];
  listaProductos : Producto[] = [];
  listaOrden:any= [];
  listaOrdenConProductosRepetidos:any= [];

  listaDomiciliariosDisponibles:any = [];
  valorTotalOrden:number = 0;

  //Arreglos a pintar a tablas front AngularMaterial
  listaOrdenDataSource:any = [];
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
              private productoService:ProductoService,
              private usuarioService:UsuarioService,
              private cd:ChangeDetectorRef) { }
  //Headers tablas Angular material
  displayedColumnsPedido:string[] = [
    /* 'idpedido', */
    'referenciapedido',
    'descripcionpedido',
    'observacionpedido',
    'destinopedido',
    'detalledestinopedido',
    'valorpedido',
    /*  'fechapedido', */
    /* 'estadopedido', */
    /* 'fk_idusuario', */
    'fk_iddomiciliario',
    'accion'
  ];
  displayedColumnsProducto:any[] = [
    /* 'idproducto', */
    'nombreproducto',
    'valorproducto',
    'cantidadproducto',
    'acciones',
  ];
  displayedColumnsOrden:string[] = [
    /* 'idproducto', */
    'nombreproducto',
    'cantidadproducto',
    'valorproducto',
    'acciones',
  ];
  //------------------------------------------
  //Filtros y adicionales tablas Angular material
  @ViewChild(MatPaginator,{static: true})paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  //---------------------------------------------
  //Relleno de tablas para angular material
  llenarTablaPedidos(){
    /*  this.pedidoService.getPedidos().subscribe((pedidos:any)=>{ */
      /* this.listaPedidos = pedidos; */
     /*  this.listaPedidosDataSource = new MatTableDataSource<Pedido>(this.listaPedidos); */
      //features table
   /*    this.listaPedidosDataSource.sort = this.sort; */
      /* this.paginator._intl.itemsPerPageLabel = 'Pedidos por pagina'; */
     /*  this.listaPedidosDataSource.paginator = this.paginator; *//*   aqui error */
    /* }) */
  }
  llenarTablaProductos(){
    this.listaProductosDataSource = new MatTableDataSource<Producto>(this.pedidosSeco);
   /*  this.productoService.getProductos().subscribe((productos:any)=>{ */
    /*   this.listaProductos = productos; */
    //features table
    /* this.listaProductosDataSource.sort = this.sort; */
   /*  this.paginator._intl.itemsPerPageLabel = 'Productos por pagina'; */
    /* this.listaProductosDataSource.paginator = this.paginator; */
   /*  }) */
  }
 
  destino:string = "";
  detalleDestino:string = "";
  observacion:string = "";
  domiciliario:string = "";
  idDomiciliario:number = 0;

  generarLetra(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero:any = (Math.random()*15).toFixed(0);
    return letras[numero];
  }
  generarHexadecimalRandom(){
    var coolor = "";
    for(var i=0;i<6;i++){
      coolor = coolor + this.generarLetra() ;
    }
    return coolor;
  }
   crearPedido(){
    let idPedido = 0;
    let descripcionPedido:string = "";
    let nombresProductos = [];
    let referenciaPedido = this.generarHexadecimalRandom  (); //toca modificar la referrencia del pedido
    let estadoPedido = "pendiente";
    let fechaPedido = "0";
    let idUsuarioSesion:number = 0;
    //------------------------------------
    //obteniendo id usuario en sesion
    let usuarioSesion = JSON.parse(localStorage.getItem("usuarioConectado") || '');
    if(usuarioSesion != ''){
      idUsuarioSesion = usuarioSesion.id;
    } 
    //-------------------------------------
    // obteniendo string de descripcion de pedido
    for(let productoOrden of this.listaOrden){
      nombresProductos.push('[' + productoOrden.cantidad + ' - ' + productoOrden.nombre + ']');
      descripcionPedido = nombresProductos.join();
    }
    //-------------------------------------
    //obteniendo id domiciliario a entregar el pedido
    for(let domi of this.listaDomiciliariosDisponibles){
      if(domi.nombreusuario == this.domiciliario){
        this.idDomiciliario = domi.idusuario;
      }
    }
    //--------------------------------------
    //obteniendo fecha
    let date = new Date()
    console.log(date.getDay() - 1);
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    let fullDate = (date.getFullYear()) +'-'+  (date.getMonth() + 1) +'-'+  (date.getDay() - 1);
    console.log(fullDate);
    fechaPedido = fullDate;
    //-----------------------------------------------
    //envio de datos a base de datos
    let pedidoAEnviar = {
      "idpedido": idPedido,
      "referenciapedido": referenciaPedido,
      "descripcionpedido":descripcionPedido,
      "destinopedido": this.destino,
      "detalledestinopedido": this.detalleDestino,
      "valorpedido": this.valorTotalOrden,
      "observacionpedido":this.observacion,
      "fk_idusuario": idUsuarioSesion,
      "estadopedido": estadoPedido,
      "fechapedido": fechaPedido,
      "fk_iddomiciliario": this.idDomiciliario
    }
    try{
       this.pedidoService.PostPedido(pedidoAEnviar);
      setTimeout(() => {
        
        this.llenarTablaPedidos();
      }, 1000);

      this.cerrarModal();
      console.log("SE ENVIO EL PEDIDO");

    }catch(err){
      console.log("ERROR AL ENVIAR PEDIDO");
      console.log(err);
    }
  }
    //-----------------------------------------------

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    /* this.llenarTablaPedidos(); */
    setTimeout(() => {
      
      this.llenarTablaProductos();
    }, 0);
  }
  filtrarPedidos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.listaPedidosDataSource.filter = filtro.trim().toLowerCase();
  }  
  filtrarProductos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.listaProductosDataSource.filter = filtro.trim().toLowerCase();
  }  

  pedidosSeco:any[] = [
    {
      "idproducto": 1,
      "nombreproducto": "hamburguesa simple",
      "valorproducto": 10000
    },
    {
      "idproducto": 2,
      "nombreproducto": "salchipapa",
      "valorproducto": 12000
    },
    {
      "idproducto": 3,
      "nombreproducto": "hamburguesa doble",
      "valorproducto": 12000
    },
    {
      "idproducto": 4,
      "nombreproducto": "perro caliente simple",
      "valorproducto": 5000
    },
    {
      "idproducto": 5,
      "nombreproducto": "choriperro",
      "valorproducto": 7000
    },
    {
      "idproducto": 6,
      "nombreproducto": "brownie con helado",
      "valorproducto": 5300
    },
    {
      "idproducto": 7,
      "nombreproducto": "mazorcada",
      "valorproducto": 11000
    },
    {
      "idproducto": 8,
      "nombreproducto": "crepe simple",
      "valorproducto": 4000
    }
  ]
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
export interface Producto {
  /* "idproducto": number, */
  "nombreproducto": string,
  "valorproducto": number
}
export interface Orden {
  "nombre": string,
  "cantidad": number
  "valor": number
  "valorTotal": number
}
