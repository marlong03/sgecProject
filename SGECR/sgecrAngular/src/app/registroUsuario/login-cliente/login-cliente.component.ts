import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {
  direccionarUrl(url:string){
    this.router.navigate([url])
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
