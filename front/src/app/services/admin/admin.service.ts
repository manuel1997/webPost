import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from  '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = environment.Url_api;

  constructor(private http:HttpClient) { }

  //RUTAS POST SERVICES

  crearPost(file,admin,post){
    const fd =  new FormData();
    fd.append('imagen',file);
    fd.append('admin',admin);
    fd.append('alt',post.alt);
    fd.append('titulo',post.titulo);
    fd.append('sumario',post.sumario);
    fd.append('categoria',post.categoria);
    fd.append('status',post.status);
    fd.append('descripcion',post.descripcion);
    return this.http.post<any>(this.URL+'crearPost',fd);
   }

   listarPost(post){
    return this.http.get<any[]>(this.URL+'listPost');
  }

  verPost(id:string){
    return this.http.get<any>(this.URL +'post/'+id);
  }

  eliminarPost(id:string){
    return this.http.delete(this.URL+'eliminar/'+id);
  }

  editarPost(post){
    return this.http.put<any>(this.URL+'editar/'+post._id,post);
  }


  //RUTAS CATEGORIAS SERVICES

  listarCategoria(categoria){
    return this.http.get<any>(this.URL+'listarCategorias');
  }

  crearCategoria(form){
    return this.http.post<any>(this.URL+'crearCategoria',form);
  }

  editarCategoria(id:string,form){
    return this.http.put<any>(this.URL+'editarCategoria/'+id,form);
  }

  eliminarCategoria(id:string){
    return this.http.delete<any>(this.URL+'borrarCategoria/'+id);
  }


  //RUTAS ADMINISTRADOR SERVICES

  crearAdministrador(admin){
    return this.http.post<any>(this.URL+'crearAdmin',admin);
  }


  listarAdmin(adminlist){
    return this.http.get<any>(this.URL+'listarAdmin');
  }

  eliminarAdmin(id:string){
    return this.http.delete<any>(this.URL+'eliminarAdmin/'+id);
  }

}
