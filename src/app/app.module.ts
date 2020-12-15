import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { MateriaprimaComponent } from './materiaprima/materiaprima.component';
import { MateriaempaqueComponent } from './materiaempaque/materiaempaque.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { AgregarproveedorComponent } from './agregarproveedor/agregarproveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

import { AgregarmaterialempaqueComponent } from './agregarmaterialempaque/agregarmaterialempaque.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    MateriaprimaComponent,
    MateriaempaqueComponent,
    AgregarproductoComponent,
    AgregarproveedorComponent,
    ProveedorComponent,
  
    AgregarmaterialempaqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
