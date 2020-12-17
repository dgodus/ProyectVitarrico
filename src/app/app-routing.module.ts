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
import { MateriaprimadescripcionComponent } from './materiaprimadescripcion/materiaprimadescripcion.component';
import { ProveedordetallesComponent } from './proveedordetalles/proveedordetalles.component';
import { MaterialempaquedetallesComponent } from './materialempaquedetalles/materialempaquedetalles.component';
import { CompramateriaenpaqueComponent } from  './compramateriaenpaque/compramateriaenpaque.component';
import { AgregarmaterialempaqueComponent} from './agregarmaterialempaque/agregarmaterialempaque.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';

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
  { path: 'proveedordetalle', component:ProveedordetallesComponent}, 
  { path: 'materialempaquedetalle', component:MaterialempaquedetallesComponent},
  { path: 'compramateriaempaque', component:CompramateriaenpaqueComponent},
  { path: 'agregarmaterialempaque', component:AgregarmaterialempaqueComponent}, //registro material empaque
  { path: 'usuarios', component:UsuariosComponent},
  { path: 'agregarusuario', component:AgregarusuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
