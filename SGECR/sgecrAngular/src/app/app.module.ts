import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardAdministradorComponent } from './dashboard-administrador/dashboard-administrador.component';
import { RegistroClienteComponent } from './registroUsuario/registro-cliente/registro-cliente.component';
import { RegistroEmpleadoComponent } from './registroUsuario/registro-empleado/registro-empleado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './registroUsuario/login/login.component';
import { MaterialTableComponent } from './material-table/material-table.component';
//material

import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistroPedidosComponent } from './dashboard-administrador/registro-pedidos/registro-pedidos.component';
const routes:Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"tabla",
    component:MaterialTableComponent
  },
  {
    path:"dashboardAdmin",
    component:DashboardAdministradorComponent
  },
 
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registroCliente",
    component:RegistroClienteComponent
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
    RegistroClienteComponent,
    RegistroEmpleadoComponent,
    LoginComponent,
    MaterialTableComponent,
    RegistroPedidosComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
