import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../services/pedido.service';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent implements OnInit,OnDestroy {
  direccionarUrl(url:string){
    this.router.navigate([url]);
  }
  nombreUsuarioSesion = JSON.parse(localStorage.getItem("usuario") || "[]") 
  displayBlock = "none";
  abrirModal(){
    this.displayBlock =   "block"
    console.log(this.nombreUsuarioSesion);
    
  }
  cerrarModal(){
    this.displayBlock =   "none"
  }
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
  /* DATATABLES */

  /* @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective; */

  
/*   dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  persons:any = []; */
  /* DATATABLES */

  constructor(private router:Router,
              private usuarioService:UsuarioService,
              private pedidoService:PedidoService) { }

  ngOnInit(): void {
   /*  setTimeout(function(){
      $('#tabla').DataTable({
        responsive: true
      });
    },1000); 

  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 2
  };
  this.pedidoService.getPedidos().subscribe((data:any)=>{
    this.persons = data;
    this.dtTrigger.next();
    console.log(data);
    
  }) */
  /* this.httpClient.get<Person[]>('data/data.json')
    .subscribe(data => {
      this.persons = (data as any).data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }); */
    /* this.pedidoService.getPedidos().subscribe((data:any)=>{
      console.log(data);
    }) */
    
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    /* this.dtTrigger.unsubscribe(); */
  }
}
