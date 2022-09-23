import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  direccionarUrl(url:string){
      this.router.navigate([url])
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
