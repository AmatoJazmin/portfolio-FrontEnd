import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {NgForm} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  path:String = "estudios";
  estudios:any;
  editar:boolean = false;
  agregar:boolean = false;
  logueado:boolean = false;
  form:any;

  constructor(private datosPortfolio:PortfolioService, private login:LoginService) { }

  ngOnInit(): void {
    this.verEstudios();
    this.logueado = this.login.logueado();
  }
  verEstudios():any {
    this.datosPortfolio.verDatos(`${this.path}`).subscribe(data =>{this.estudios = data})
  }

  agregarEstudio (formAgr: NgForm):void{
    this.datosPortfolio.agregarDatos(this.path,formAgr.value).subscribe({
    next: () => {
      this.verEstudios();
      this.agregar = false;
    }
  })
  }

  editarEstudio(formEdit:NgForm):void{
    console.log(this.form)
    this.datosPortfolio.editarDatos(this.path,formEdit.value).subscribe({
      next: () => {
        this.verEstudios()
        this.editar = false;
      }
    })
  }

  eliminarEstudio(est:number):void{
    this.datosPortfolio.eliminarDatos(this.path,JSON.stringify(est)).subscribe({
      next: () => {
        this.verEstudios()
        this.agregar = false;
        this.editar = false;
      }
    })
  }

}

