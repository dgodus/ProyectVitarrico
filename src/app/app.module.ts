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
import { MateriaprimadetallesComponent } from './materiaprimadetalles/materiaprimadetalles.component';
import { AgregarmateriaprimaComponent } from './agregarmateriaprima/agregarmateriaprima.component';
import { MateriaprimadescripcionComponent } from './materiaprimadescripcion/materiaprimadescripcion.component';
import { ProveedordetallesComponent } from './proveedordetalles/proveedordetalles.component';
import { MaterialempaquedetallesComponent } from './materialempaquedetalles/materialempaquedetalles.component';
import { CompramateriaenpaqueComponent } from './compramateriaenpaque/compramateriaenpaque.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';

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
  
    AgregarmaterialempaqueComponent,
  
    MateriaprimadetallesComponent,
  
    AgregarmateriaprimaComponent,
  
    MateriaprimadescripcionComponent,
  
    ProveedordetallesComponent,
  
    MaterialempaquedetallesComponent,
  
    CompramateriaenpaqueComponent,
  
    UsuariosComponent,
  
    AgregarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
