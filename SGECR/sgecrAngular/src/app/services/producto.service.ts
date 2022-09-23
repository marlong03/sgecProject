import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  getProductos():any{
    return this.http.get("http://localhost:8080/producto/all");
  }
  /* validarProducto(email:any,password:any):any{
    return this.http.get("http://localhost:8080/Producto/" + email + "/" + password);
  } */
   PostProducto(data:Producto):any{
    return this.http.post<Producto>("http://localhost:8080/producto/new",data).subscribe((x:any) => {
      console.log(x)
    });
  }
constructor(private http:HttpClient) { }
}
interface Producto{

}
