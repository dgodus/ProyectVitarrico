import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { MateriaprimaComponent } from './materiaprima/materiaprima.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { RegistroComponent } from './registro/registro.component';
import { AgregarproveedorComponent } from './agregarproveedor/agregarproveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { MateriaempaqueComponent } from './materiaempaque/materiaempaque.component';
import { AgregarmateriaprimaComponent } from './agregarmateriaprima/agregarmateriaprima.component';
import { MateriaprimadescripcionComponent} from './materiaprimadescripcion/materiaprimadescripcion.component';
const routes: Routes = [
   
  { path:'', component:LoginComponent },  //inicio
  { path:'registro', component:RegistroComponent },  //registro
  { path:'materiaprima', component:MateriaprimaComponent },  //registro
  { path: 'agregarproducto', component:AgregarproductoComponent },
  { path: 'agregarproveedor' , component:AgregarproveedorComponent },
  { path: 'proveedor' , component:ProveedorComponent },
  { path: 'materiaempaque',component:MateriaempaqueComponent } ,
  { path: 'agregarmateriaprima' ,component:AgregarmateriaprimaComponent },
  { path: 'descripcionmateriaprima', component:MateriaprimadescripcionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
