//Esse arquivo é um componente.. Aqui estou importando o Component para definir que essa classe é um componente.
import {Component, Inject} from '@angular/core';
import {Http} from '@angular/http';
//Essa é a anotação informando as propriedades do componente.
@Component({
    //Propriedade para buscar o templateUrl em caminho relativo (sem ter que colocar o caminho inteiro do arquivo)
    moduleId : module.id,
    //o nome do seletor, no caso <app> </app>
    selector:'app',
    //onde está o html desse componente
    templateUrl:'./app.component.html'
})
export class AppComponent{}