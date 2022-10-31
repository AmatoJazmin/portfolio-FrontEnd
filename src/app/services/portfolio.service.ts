import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  api:String = "https://portfolio1argprog.herokuapp.com"

  constructor(private http:HttpClient) { }

  verDatos(path:String):Observable<any>{
    return this.http.get<any>(`${this.api}/${path}`)};

  agregarDatos(path:String,datos:any):Observable<any>{
    return this.http.post<any>(`${this.api}/${path}/agregar`,datos)};

  editarDatos(path:String,datos:any):Observable<any>{
    return this.http.put<any>(`${this.api}/${path}/editar`,datos)};

  eliminarDatos(path:String,datos:any):Observable<any>{
    return this.http.delete<any>(`${this.api}/${path}/eliminar/`+ datos,{
      headers: new HttpHeaders({'Content-Type': 'application/json'})})};

}
