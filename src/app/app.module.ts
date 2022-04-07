import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    EquipoComponent,
    ServicioComponent,
    AboutComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
