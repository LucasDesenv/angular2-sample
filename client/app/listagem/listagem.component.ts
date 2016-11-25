import {Component,Inject} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId:module.id,
    selector:'listagem',
    templateUrl:'./listagem.component.html'
})
export class ListagemComponent{
    fotos: Array<Object> = [];

    //Injeção por meio do @Inject ou também por tipagem: http: Http ficando:
    //constructor(http: Http) {}
    constructor(@Inject(Http) http){
        /**
         * O Angular 2.0 não trabalha mais com o conceito de promise e sim de Observable. 
         * Que no caso é o subscribe, onde você assina para receber os dados quando eles vierem.
         * É como se fosse o promise.then().
         */
        http
        .get('v1/fotos')
        .map(resposta => resposta.json())
        .subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }
}