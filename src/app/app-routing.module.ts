import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ContactoComponent } from './component/contacto/contacto.component';

const routes: Routes = [{ path: 'inicio', component: InicioComponent },
{ path: 'sobre-mi', component: AcercaDeComponent },
{ path: 'estudios', component: EducacionComponent },
{ path: 'tecnologias', component: SkillsComponent },
{ path: 'proyectos', component: ProyectosComponent },
{ path: 'contacto', component: ContactoComponent },
{path: '', redirectTo: '/inicio', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
