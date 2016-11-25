import {Component, Input} from '@angular/core';
@Component({
    moduleId : module.id,
    selector:'foto',
    templateUrl:'./foto.component.html'
})
export class FotoComponent {
    //O @Input() serve para informar que essa propriedade aceita receber valores.
    @Input() titulo : string;
    @Input() url : string;
    descricao : string;

}