import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';

interface login {
  nombre:String;
  contrasena:String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";

  constructor(private http:HttpClient) {
   }

  login(credenciales:login):Observable<Boolean>{
   return this.http.post<Boolean>(`${this.url}/Login`,credenciales).pipe(tap((response:Boolean)=>{
    if(response) {sessionStorage.setItem ("usuario","administrador"); console.log("Logueado")}
   }))}

  logout(){
    sessionStorage.removeItem("usuario")
  }

  logueado():boolean{
  return sessionStorage.getItem("usuario") !== null;
  }
}

