import { Component, OnInit,ViewChild,Inject, ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CdkAriaLive } from '@angular/cdk/a11y';


@Component({
  selector: 'app-anadir-pedido',
  templateUrl: './anadir-pedido.component.html',
  styleUrls: ['./anadir-pedido.component.css']
})
export class AnadirPedidoComponent implements OnInit {
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
  displayedColumnsProducto:string[] = [
    /* 'idproducto', */
    'nombreproducto',
    'valorproducto',
    'Cantidad',
    'Acciones',
  ];
  displayedColumnsOrden:string[] = [
    /* 'idproducto', */
    'nombreproducto',
    'cantidadproducto',
    'valorproducto',
    'Acciones',
  ];
  //------------------------------------------
  //Filtros y adicionales tablas Angular material
  @ViewChild(MatPaginator,{static: true})paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  //---------------------------------------------
  //Relleno de tablas para angular material
  llenarTablaPedidos(){
     this.pedidoService.getPedidos().subscribe((pedidos:any)=>{
      this.listaPedidos = pedidos;
      this.listaPedidosDataSource = new MatTableDataSource<Pedido>(this.listaPedidos);
      //features table
      this.listaPedidosDataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Pedidos por pagina';
      this.listaPedidosDataSource.paginator = this.paginator;/*   aqui error */
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
  llenarTablaOrden(){
      this.listaOrdenDataSource = new MatTableDataSource<Orden>(this.listaOrden);
      //features table
      this.listaOrdenDataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
      this.listaOrdenDataSource.paginator = this.paginator;
  }
  //----------------------------------------------------------
  anadirProductoAOrden(event:any){
    let valorTotalOrden = 0;
    
    if(event.path[0].defaultValue == "Añadir"){
    //obteniendo datos para relleno objProductoParaOrden
    let nombreProducto = event.path[2].childNodes[0].innerText;
    let cantidadProducto = parseInt(event.path[2].childNodes[2].childNodes[0].value);
    let valorProducto = event.path[2].childNodes[1].childNodes[0].data.split("")
    valorProducto.shift()
    valorProducto = parseInt(valorProducto.join(''))
    let objProductoParaOrden = {
      nombre:nombreProducto,
      cantidad:cantidadProducto,
      valor:valorProducto,
      valorTotal:(cantidadProducto * valorProducto)
    }
    //-------------------------------------------------
    this.listaOrdenConProductosRepetidos.push(objProductoParaOrden);
    //No se repetiran los productos en el arreglo
    for(let i in this.listaOrden){
      if(objProductoParaOrden.nombre == this.listaOrden[i].nombre){
        this.listaOrden.splice(i,1);
      }
    }
    this.listaOrden.push(objProductoParaOrden);
    this.llenarTablaOrden();
    //-------------------------------------
  }
    //actualizamos valor total
    for(let i of this.listaOrden){
      valorTotalOrden += i.valorTotal;
    }
    this.valorTotalOrden = valorTotalOrden;
    //------------------------
    //aparecer Seccion Orden Pedido
    if(this.listaOrden.length != 0){
      this.aparecerSeccionOrdenPedido = true;
    }else{
      this.aparecerSeccionOrdenPedido = false;
    }
    //-----------------------------
  }
  eliminarProductoDeOrden(event:any){
    let nombreProductoEliminar = event.path[2].childNodes[0].innerText;

    for(let i in this.listaOrden){
      if(this.listaOrden[i].nombre == nombreProductoEliminar){
        this.valorTotalOrden -= this.listaOrden[i].valorTotal;
        this.listaOrden.splice(i,1);
        this.llenarTablaOrden();
        if(this.listaOrden.length == 0){
          this.aparecerSeccionOrdenPedido = false;
        }
      }
    }
  }
 /*  llenarSelectDomiciliarios(){
    this.usuarioService.getDomiciliarios().subscribe((domiciliarios:any)=>{
      console.log(domiciliarios);
      this.listaDomiciliariosDisponibles = domiciliarios;
    })
  } */
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
  async crearPedido(){
    let idPedido = 0;
    let descripcionPedido:string = "";
    let nombresProductos = [];
    let referenciaPedido = this.generarHexadecimalRandom  (); //toca modificar la referrencia del pedido
    let estadoPedido = "pendiente";
    let fechaPedido = "0";
    let idUsuarioSesion:number = 0;
    //------------------------------------
    //obteniendo id usuario en sesion
    let usuarioSesion = JSON.parse(localStorage.getItem("usuario") || '');
    if(usuarioSesion != ''){
      idUsuarioSesion = usuarioSesion.idusuario;
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
      "fechapedido": "2020-02-02  ",
      "fk_iddomiciliario": this.idDomiciliario
    }
    try{
      console.log(pedidoAEnviar);
      
      await this.pedidoService.PostPedido(pedidoAEnviar);
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
    this.llenarTablaPedidos();
    this.llenarTablaProductos();
    
    this.cd.detectChanges();
    console.log(this.listaProductos);
    
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