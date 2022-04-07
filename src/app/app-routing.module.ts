import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'servicio', component: ServicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'**', component:NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
