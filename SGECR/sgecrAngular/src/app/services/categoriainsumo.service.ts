import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaInsumoService {
  getCategoriaInsumos():any{
    return this.http.get("http://localhost:8080/categoriainsumo/all");
  }
  getCategoriaInsumoById(id:any):any{
    return this.http.get("http://localhost:8080/categoriainsumo/"+ id);
  }
 
   PostCategoriaInsumo(data:CategoriaInsumo):any{
    return this.http.post<CategoriaInsumo>("http://localhost:8080/categoriainsumo/new",data).subscribe((x:any) => {
      console.log(x)
    });
  }
  constructor(private http:HttpClient) { }
}
interface CategoriaInsumo{

}

