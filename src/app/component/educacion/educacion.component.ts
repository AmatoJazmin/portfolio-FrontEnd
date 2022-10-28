import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {NgForm} from '@angular/forms';

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

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.verEstudios();
  }
  verEstudios():any {
    this.datosPortfolio.verDatos(`${this.path}`).subscribe(data =>{this.estudios = data})
  }

  agregarEstudio (formAgr: NgForm):void{
    this.datosPortfolio.agregarDatos(this.path,formAgr.value).subscribe({
    next: () => {
      this.verEstudios();
      formAgr.reset;
    }
  })
  }

  editarEstudio(formEdit:NgForm):void{
    this.datosPortfolio.editarDatos(this.path,formEdit.value).subscribe({
      next: () => {
        this.verEstudios()
      }
    })
  }

  eliminarEstudio(est:number):void{
    this.datosPortfolio.eliminarDatos(this.path,{id:est}).subscribe({
      next: () => {
        this.verEstudios()
      }
    })
  }

}

