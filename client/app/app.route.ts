import {RouterModule, Routes} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

//uma constante de array de Routes
const appRoutes:Routes = [

    {path:'', component:ListagemComponent},
    {path:'cadastro', component:CadastroComponent},
    {path:'cadastro/:id', component:CadastroComponent},
    //** significa qualquer coisa que não foi definido no appRoutes
    {path:'**', component:ListagemComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
