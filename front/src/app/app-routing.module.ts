import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Administrador Components
import { AdminOutletComponent } from './componentes/admin/admin-outlet/admin-outlet.component';
import { ListarPostComponent } from './componentes/admin/listar-post/listar-post.component';
import { CrearPostComponent } from './componentes/admin/crear-post/crear-post.component';
import { CrearCategoriaComponent } from './componentes/admin/crear-categoria/crear-categoria.component';
import { EditarPostComponent } from './componentes/admin/editar-post/editar-post.component';
import { CrearAdministradorComponent } from './componentes/admin/crear-administrador/crear-administrador.component';
import { LoginComponent } from './componentes/admin/login/login.component';

// Usuarios Components
import { WebOutletComponent } from './componentes/web/web-outlet/web-outlet.component';
import { VistaCategoriaComponent } from './componentes/web/vista-categoria/vista-categoria.component';
import { VistaPostComponent } from './componentes/web/vista-post/vista-post.component';
import { BusquedaComponent } from './componentes/web/busqueda/busqueda.component'
import { SeccionPostComponent } from './componentes/web/seccion-post/seccion-post.component';

import {LoginGuard} from './login.guard'

const routes: Routes = [

  {
    path:'',
    component: WebOutletComponent,
    children: [
      { path: '',component: SeccionPostComponent, pathMatch: 'full'},
      { path: 'post/:url/:id', component: VistaPostComponent},
      { path: 'categoria/:nombre/:numpage', component: VistaCategoriaComponent},
      { path: 'busqueda/:datos', component: BusquedaComponent},
      { path: '**', redirectTo: '' }
    ]
  },

  {
    path:'',
    component: AdminOutletComponent,
    canActivate:[LoginGuard],
    children: [
      { path: 'adminpost', component: ListarPostComponent, canActivate:[LoginGuard] },
      { path: 'crearpost', component: CrearPostComponent, canActivate:[LoginGuard] },
      { path: 'editarpost/:id', component: EditarPostComponent, canActivate:[LoginGuard] },
      { path: 'admincategoria', component: CrearCategoriaComponent, canActivate:[LoginGuard] },
      { path: 'crear_admin', component: CrearAdministradorComponent, canActivate:[LoginGuard] },
      { path: '**', redirectTo: '' }
    ]
  },

  {
    path:'login',
    component: LoginComponent,
  },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
