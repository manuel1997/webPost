import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from  '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  URL = environment.Url_api;

  constructor(private http:HttpClient) { }

  categorias(categorias){
    return this.http.get<any>(this.URL+'listarCategorias')
  }

  PostCategorias(nombre:string,numpage:number){
    return this.http.get<any>(this.URL+`postCategorias/${nombre}/${numpage}`);
  }

  Post1(post1){
    return this.http.get<any>(this.URL+'post1');
  }

  Post2(post2){
    return this.http.get<any>(this.URL+'post2');
  }

  Post3(post3){
    return this.http.get<any>(this.URL+'post3');
  }

  PostIntermedios(postintermedios){
    return this.http.get<any>(this.URL+'postIntermedios');
  }

  postFinales(postfinales){
    return this.http.get<any>(this.URL+'postFinales');
  }

  postFinales2(postfinales,pagSig,getId){

    return this.http.get<any>(this.URL+'postFinales',{params: {page: pagSig, id:getId}});
  }

  verPost(titulo:string,id:string){
    return this.http.get<any>(this.URL +'verPost/'+titulo+'/'+id);
  }

  relacionados(categoria,id){
    return this.http.get<any>(this.URL+'relacionados',{params: {categoria:categoria,id:id}})
  }

  busquedaPost(datos:string){
    return this.http.get<any>(this.URL+`busqueda/${datos}`);
  }

}
