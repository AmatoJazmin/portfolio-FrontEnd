import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  path:String = "datospersonales"
  datos:any;
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

  editarDatos():void{
    let desc = document.querySelectorAll("textarea");
    let img = document.querySelector("input");
    this.datos.descripcion1 = desc[0].value;
    this.datos.descripcion2 = desc[1].value;
    this.datos.descripcion3 = desc[2].value;
    this.datos.imagen = img?.value;
    this.datosPortfolio.editarDatos(this.path,this.datos).subscribe({
      next: () => {
        this.verDatos();
        this.editar = false;
      }
    })
  }
}
