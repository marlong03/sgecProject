import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardAdministradorComponent } from './dashboard-administrador/dashboard-administrador.component';
import { LoginEmpleadoComponent } from './registroUsuario/login-empleado/login-empleado.component';
import { LoginClienteComponent } from './registroUsuario/login-cliente/login-cliente.component';
import { RegistroClienteComponent } from './registroUsuario/registro-cliente/registro-cliente.component';
import { RegistroEmpleadoComponent } from './registroUsuario/registro-empleado/registro-empleado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"dashboardAdmin",
    component:DashboardAdministradorComponent
  },
  {
    path:"loginCliente",
    component:LoginClienteComponent
  },
  {
    path:"registroCliente",
    component:RegistroClienteComponent
  },
  {
    path:"loginEmpleado",
    component:LoginEmpleadoComponent
  },
  {
    path:"registroEmpleado",
    component:RegistroEmpleadoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardAdministradorComponent,
    LoginEmpleadoComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    RegistroEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
