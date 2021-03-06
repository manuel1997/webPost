import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { AppComponent } from './app.component';
import { AdminOutletComponent } from './componentes/admin/admin-outlet/admin-outlet.component';
import { AdminNavbarComponent } from './componentes/admin/admin-navbar/admin-navbar.component';
import { ListarPostComponent } from './componentes/admin/listar-post/listar-post.component';
import { CrearPostComponent } from './componentes/admin/crear-post/crear-post.component';
import { CrearCategoriaComponent } from './componentes/admin/crear-categoria/crear-categoria.component';
import { EditarPostComponent } from './componentes/admin/editar-post/editar-post.component';
import { CrearAdministradorComponent } from './componentes/admin/crear-administrador/crear-administrador.component';
import { LoginComponent } from './componentes/admin/login/login.component';

import { WebOutletComponent } from './componentes/web/web-outlet/web-outlet.component';
import { WebNavbarComponent } from './componentes/web/web-navbar/web-navbar.component';
import { PrincipalPostComponent } from './componentes/web/principal-post/principal-post.component';
import { IntermedioPostComponent } from './componentes/web/intermedio-post/intermedio-post.component';
import { FinalPostComponent } from './componentes/web/final-post/final-post.component';
import { FooterComponent } from './componentes/web/footer/footer.component';
import { VistaCategoriaComponent } from './componentes/web/vista-categoria/vista-categoria.component';
import { VistaPostComponent } from './componentes/web/vista-post/vista-post.component';
import { BusquedaComponent } from './componentes/web/busqueda/busqueda.component'
import { SeccionPostComponent } from './componentes/web/seccion-post/seccion-post.component';

import {LoginGuard} from './login.guard'
import {TokenIterceptorService} from './services/admin/token-iterceptor.service';
import { LoaderComponent } from './componentes/loader/loader.component';
import {LoaderService} from './services/loader/loader.service'
import {InterceptorService} from './services/loader/interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    AdminOutletComponent,
    AdminNavbarComponent,
    ListarPostComponent,
    CrearPostComponent,
    CrearCategoriaComponent,
    EditarPostComponent,
    CrearAdministradorComponent,
    LoginComponent,
    WebOutletComponent,
    WebNavbarComponent,
    PrincipalPostComponent,
    IntermedioPostComponent,
    FinalPostComponent,
    FooterComponent,
    VistaCategoriaComponent,
    VistaPostComponent,
    SeccionPostComponent,
    BusquedaComponent,
    LoaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule,
    CKEditorModule,
  ],
  providers: [
    LoaderService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    LoginGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenIterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
