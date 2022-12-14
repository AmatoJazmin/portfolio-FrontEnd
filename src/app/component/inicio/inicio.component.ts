import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  path:String = "datospersonales";
  datos:any = [];
  logueado:boolean = false;
  editar:boolean = false;

  constructor(private datosPortfolio:PortfolioService, private login:LoginService) { }

  ngOnInit(): void {
    this.verDatos();
    this.logueado = this.login.logueado();
  }

  verDatos():any {
    this.datosPortfolio.verDatos(this.path).subscribe(data => {this.datos = data[0]});
  }

  editarDato():void{
    let edit = document.querySelector("input");
    this.datos.profesion = edit?.value;
    this.datosPortfolio.editarDatos(this.path,this.datos).subscribe({
      next: () => {
        this.verDatos();
        edit!.value = '';
      }
    })
  }

}
