import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(`${this.api}/agregar/${path}`,datos)};

  editarDatos(path:String,datos:any):Observable<any>{
    return this.http.put<any>(`${this.api}/editar/${path}`,datos)};

  eliminarDatos(path:String,datos:any):Observable<any>{
    return this.http.delete<any>(`${this.api}/eliminar/${path}`,datos)};

}
