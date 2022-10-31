import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { LoginService } from 'src/app/services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  path:String = "proyectos";
  proyectos:any;
  editar:boolean = false;
  agregar:boolean = false;
  logueado:boolean = false;
  form:any;

  constructor(private datosPortfolio:PortfolioService, private login:LoginService) { }

  ngOnInit(): void {
    this.verProyectos();
    this.logueado = this.login.logueado();
  }

  verProyectos():any {
    this.datosPortfolio.verDatos(`${this.path}`).subscribe(data =>{this.proyectos = data})
  }

  agregarProyecto (formAgr: NgForm):void{
    this.datosPortfolio.agregarDatos(this.path,formAgr.value).subscribe({
    next: () => {
      this.verProyectos();
      this.agregar = false;
    }
  })
  }

  editarProyecto(formEdit:NgForm):void{
    this.datosPortfolio.editarDatos(this.path,formEdit.value).subscribe({
      next: () => {
        this.verProyectos()
        this.editar = false;
      }
    })
  }

  eliminarProyecto(proy:number):void{
    this.datosPortfolio.eliminarDatos(this.path,JSON.stringify(proy)).subscribe({
      next: () => {
        this.verProyectos()
        this.agregar = false;
        this.editar = false;
      }
    })
  }

}
