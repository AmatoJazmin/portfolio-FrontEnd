import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {NgForm} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  path:String = "habilidades";
  habilidades:any;
  editar:boolean = false;
  agregar:boolean = false;
  logueado:boolean = false;

  constructor(private datosPortfolio:PortfolioService, private login:LoginService) { }

  ngOnInit(): void {
    this.verTecnologias();
    this.logueado = this.login.logueado();
  }

  verTecnologias():any {
    this.datosPortfolio.verDatos(this.path).subscribe(data =>{this.habilidades = data})
  }

  agregarTecnologia (formTecno: NgForm):void{
    this.datosPortfolio.agregarDatos(this.path,formTecno.value).subscribe({
    next: () => {
      this.verTecnologias();
      formTecno.reset();
    }
  })
  }

  editarTecnologia(formEdit:NgForm):void{
    this.datosPortfolio.editarDatos(this.path,formEdit.value).subscribe({
      next: () => {
        this.verTecnologias();
        formEdit.reset();
      }
    })
  }

  eliminarTecnologia(tecno:number):void{
    this.datosPortfolio.eliminarDatos(this.path,JSON.stringify(tecno)).subscribe({
      next: () => {
        this.verTecnologias()
      }
    })
  }

}
