import {Component,Inject} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent}from '../foto/foto.component';

@Component({
    moduleId:module.id,
    selector:'listagem',
    templateUrl:'./listagem.component.html'
})
export class ListagemComponent{
    fotos: FotoComponent[] = [];
    service:FotoService;
    mensagem:string = '';
    //Injeção por meio do @Inject ou também por tipagem: http: Http ficando:
    //constructor(http: Http) {}
    constructor(service:FotoService){
        this.service = service;
        /**
         * O Angular 2.0 não trabalha mais com o conceito de promise e sim de Observable. 
         * Que no caso é o subscribe, onde você assina para receber os dados quando eles vierem.
         * É como se fosse o promise.then().
         */
        this.service.lista()
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro));
    }

    remover(foto:FotoComponent){
        this.service.remover(foto)
        .subscribe(
            ()=>{
                let novasFotos = this.fotos.slice(0);
                let index = novasFotos.indexOf(foto);
                novasFotos.splice(index,1);
                //O change detection do Angular2 só entra em ação quando a referência do atributo muda.
                this.fotos = novasFotos;
                this.mensagem="Foto removida com sucesso";
            },
            erro => { 
                console.log(erro);
                this.mensagem="Não foi possível remover a foto"; 
            }
        );
    }
}