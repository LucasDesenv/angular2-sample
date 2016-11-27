import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component'
import {FormGroup,FormBuilder, Validators} from '@angular/forms'; 
import {FotoService} from '../foto/foto.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
    moduleId:module.id,
    selector:'cadastro',
    templateUrl:'./cadastro.component.html'
})

export class CadastroComponent{
    foto : FotoComponent=  new FotoComponent();
    meuForm : FormGroup;
    service:FotoService;
    activatedRoute : ActivatedRoute;
    router:Router;
    mensagem:string='';
    constructor(service:FotoService, fb:FormBuilder,activatedRoute : ActivatedRoute, router:Router){
        this.service = service;
        this.router = router;
        this.meuForm = fb.group({
            titulo : ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url : ['', Validators.required],
            descricao: ['']
        });
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id){
                this.service.findById(id)
                .subscribe(
                    foto => this.foto = foto, 
                    error => console.log(error));
            }
        });
    } 

    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
        this.service.cadastrar(this.foto)
            .subscribe(res => {
                console.log('foto salva!!');
                this.foto = new FotoComponent();
                this.mensagem = res.mensagem;
                if (!res.isInclusao()) 
                    this.router.navigate(['']);
            },erro => console.log(erro));
    }
}