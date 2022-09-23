import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaInsumoService } from '../services/categoriainsumo.service';
import { InsumoService } from '../services/insumo.service';
import { PedidoService } from '../services/pedido.service';
import { ProductoService } from '../services/producto.service';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent implements OnInit,OnDestroy {
  listaPedidos:any = [];
  listaInsumos:any = [];
  listaCategoriaInsumos:any = [];


  displayBlock = "none";
  displayBlockInsumo = 'none';

  accionModalInsumo = "";
  categoriaSelect:any;
  /* nombreInsumo:any = "";
  cantidadInsumo:any = "";
  valorUnitarioInsumo:any = "";
  unidadInsumo:any= ""; */
  abrirModalInsumo(accion:string,event:any){
    console.log(this.categoriaSelect);
    
    this.accionModalInsumo = accion;
    if(accion == "Actualizar"){
      let idInsumo = event.path[2].cells[0].childNodes[0].data;
      this.insumoService.getInsumoById(idInsumo).subscribe((data:any)=>{
       this.nombreInsumo = data.nombreinsumo;
        this.cantidadInsumo = data.cantidadinsumo;
        this.valorUnitarioInsumo = data.valorunitarioinsumo;
        this.unidadInsumo = data.unidadinsumo;

        this.categoriaInsumoService.getCategoriaInsumoById(data.fk_idcategoriainsumos).subscribe((cat:any)=>{
          this.categoriaSelect = cat.nombrecategoria;
        })
        });
      this.actualizarInsumo(idInsumo);
    }


    this.displayBlockInsumo =   "block";
  }
  cerrarModalInsumo(){
    this.displayBlockInsumo =   "none"
  }
  abrirModal(){
    this.displayBlock =   "block"
    console.log(this.nombreUsuarioSesion);
  }
  cerrarModal(){
    this.displayBlock =   "none"
  }
  pedidosTableState = false;
  insumoTableState = false;
  changeStatePedidosTableState(){
    this.insumoTableState = false;
    if(this.pedidosTableState == true){
      this.pedidosTableState = false;
    }else if(this.pedidosTableState == false){
      this.pedidosTableState = true;
    }
  }
  
  changeStateInsumoTableState(){
    this.pedidosTableState = false;
    if(this.insumoTableState == true){
      this.insumoTableState = false;
    }else if(this.insumoTableState == false){
      this.insumoTableState = true;
    }
  }
  direccionarUrl(url:string){
    this.router.navigate([url]);
  }
  nombreUsuarioSesion = JSON.parse(localStorage.getItem("usuario") || "[]") 
  user =  JSON.parse(localStorage.getItem("usuario") || "[]")

  nombreCompleto:any = this.user.nombreusuario;
  telefono:any = this.user.telefonousuario;
  email:any = this.user.emailusuario;
  contrasena:any = this.user.contrasenausuario;
  actualizarUsuario(){
    let data = {
      idusuario: this.user.idusuario,
      nombreusuario: this.nombreCompleto,
      telefonousuario: this.telefono,
      emailusuario: this.email,
      contrasenausuario: this.contrasena,
      estadousuario: 1,
      codigoempresarial:"Admin",
      direccionusuario: "",
      fk_idrol: 1
    }
    try{
      this.usuarioService.PostUsuario(data);
      localStorage.setItem("usuario",JSON.stringify(data))
    }catch(err){
      alert("NO PUDIMOS ACTUALIZAR EN USUARIO")
      console.log(err);
      
    }
  }

  nombreInsumo:any = "";
  cantidadInsumo:any = "";
  valorUnitarioInsumo:any = "";
  unidadInsumo:any= "";
  agregarInsumo(){
    let data =  {
      "idinsumo": 0,
      "nombreinsumo": this.nombreInsumo,
      "cantidadinsumo": this.cantidadInsumo,
      "unidadinsumo": this.unidadInsumo,
      "valortotalinsumo": (parseInt(this.cantidadInsumo) * parseInt(this.valorUnitarioInsumo)),
      "estadoinsumo": "Activo",
      "fk_idcategoriainsumos": 2,
      "valorunitarioinsumo": this.valorUnitarioInsumo,
      "fechaingresoinsumo": "2022-00-00"
    }
    try{
      console.log(data);
      this.insumoService.PostInsumo(data);
    }catch(err){
      alert("NO PUDIMOS CREAR EL INSUMO")
      console.log(err);
      
    }
  }
  actualizarInsumo(id:any){
  
    
    
    let data =  {
      "idinsumo": id,
      "nombreinsumo": this.nombreInsumo,
      "cantidadinsumo": this.cantidadInsumo,
      "unidadinsumo": this.unidadInsumo,
      "valortotalinsumo": (parseInt(this.cantidadInsumo) * parseInt(this.valorUnitarioInsumo)),
      "estadoinsumo": "Activo",
      "fk_idcategoriainsumos": 2, //toca cambiar este valor
      "valorunitarioinsumo": this.valorUnitarioInsumo,
      "fechaingresoinsumo": "2022-00-00"
    }
    try{
      console.log(data);
      this.insumoService.PostInsumo(data);
    }catch(err){
      alert("NO PUDIMOS CREAR EL INSUMO")
      console.log(err);
      
    }
  }
  constructor(private router:Router,
              private usuarioService:UsuarioService,
              private pedidoService:PedidoService,
              private productoService:ProductoService,
              private insumoService:InsumoService,
              private categoriaInsumoService:CategoriaInsumoService) { }

  ngOnInit(): void {
    this.obtenerPedidos()
    this.obtenerInsumos()
    this.obtenerCategoriaInsumos()
    }
    obtenerPedidos(){
      this.pedidoService.getPedidos().subscribe((data:any)=>{
        console.log(data);
        this.listaPedidos = data;
      })}
    obtenerInsumos(){
      this.insumoService.getInsumos().subscribe((data:any)=>{
        console.log(data);
        this.listaInsumos = data;
      })
    }
    obtenerCategoriaInsumos(){
      this.categoriaInsumoService.getCategoriaInsumos().subscribe((data:any)=>{
        console.log(data);
        this.listaCategoriaInsumos = data;
      })
    }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    /* this.dtTrigger.unsubscribe(); */
  }
}
