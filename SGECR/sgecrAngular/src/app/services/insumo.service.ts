import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  getInsumos():any{
    return this.http.get("http://localhost:8080/insumo/all");
  }
  getInsumoById(id:any):any{
    return this.http.get("http://localhost:8080/insumo/"+id);
  }
 
   PostInsumo(data:Insumo):any{
    return this.http.post<Insumo>("http://localhost:8080/insumo/new",data).subscribe((x:any) => {
      console.log(x)
    });
  }
  constructor(private http:HttpClient) { }
}
interface Insumo{
    "idinsumo": number,
    "nombreinsumo": string,
    "cantidadinsumo": number,
    "unidadinsumo": string,
    "valortotalinsumo":number,
    "estadoinsumo":string,
    "fk_idcategoriainsumos": number,
    "valorunitarioinsumo":number,
    "fechaingresoinsumo":string
}

