import { Component, OnInit,ViewChild,Inject} from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PedidoService } from '../services/pedido.service';
  
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})

export class MaterialTableComponent implements OnInit {
  displayedColumns:string[] = ['position','name','weight','symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  listaPedidosDataSource:any = [];
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



  @ViewChild(MatPaginator,{static: true})paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  llenarPedidosTabla(){
    let list = [
      {
        "idpedido": 1,
        "referenciapedido": "1aef4",
        "descripcionpedido": "hamburguesa doble,haburguesa carne,gaseosa cuatro,gaseosa personal cocacola",
        "destinopedido": "casa",
        "detalledestinopedido": "calle 100",
        "valorpedido": 40,
        "observacionpedido": "la haburguesa de carne sin cebolla, gracias",
        "fk_idusuario": 3,
        "estadopedido": "Pendiente",
        "fechapedido": "2020-02-03",
        "fk_iddomiciliario": 5
      },
      {
        "idpedido": 2,
        "referenciapedido": "43asv",
        "descripcionpedido": "hamburguesa simple",
        "destinopedido": "mesa",
        "detalledestinopedido": "3",
        "valorpedido": 10000,
        "observacionpedido": "sin obser",
        "fk_idusuario": 2,
        "estadopedido": "Pendiente",
        "fechapedido": "2022-09-18",
        "fk_iddomiciliario": 0
      },
      {
        "idpedido": 3,
        "referenciapedido": "ver54",
        "descripcionpedido": "hamburguesa doble,haburguesa carne,gaseosa cuatro,gaseosa personal cocacola",
        "destinopedido": "casa",
        "detalledestinopedido": "calle 102",
        "valorpedido": 40,
        "observacionpedido": "la haburguesa de carne sin cebolla, gracias",
        "fk_idusuario": 3,
        "estadopedido": "Entregado",
        "fechapedido": "2020-02-06",
        "fk_iddomiciliario": 5
      },
      {
        "idpedido": 4,
        "referenciapedido": "1aef4",
        "descripcionpedido": "salchipapita",
        "destinopedido": "mesa",
        "detalledestinopedido": "1",
        "valorpedido": 40,
        "observacionpedido": "nada",
        "fk_idusuario": 3,
        "estadopedido": "Pendiente",
        "fechapedido": "2022-02-03",
        "fk_iddomiciliario": 5
      },
      {
        "idpedido": 5,
        "referenciapedido": "000000",
        "descripcionpedido": "[10 - Hamburguesa Simple]",
        "destinopedido": "recoge",
        "detalledestinopedido": "",
        "valorpedido": 100000,
        "observacionpedido": "voy en 5mins",
        "fk_idusuario": 1,
        "estadopedido": "pendiente",
        "fechapedido": "2022-11-05",
        "fk_iddomiciliario": 0
      },
     
    ]
      this.listaPedidosDataSource = new MatTableDataSource<Pedido>(list);


  }
  constructor(private pedidoService:PedidoService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
    this.dataSource.paginator = this.paginator;

    this.listaPedidosDataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
    this.listaPedidosDataSource.paginator = this.paginator;
    this.llenarPedidosTabla()
  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  
  }  
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
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