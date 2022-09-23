import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  direccionarUrl(url:string){
    this.router.navigate([url])
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
