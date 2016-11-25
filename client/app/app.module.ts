import 'rxjs/add/operator/map';
import {NgModule} from '@angular/core'
//Import necessário para informar que essa aplicação irá rodar em um browser
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module'
import {HttpModule} from '@angular/http';
//Import para adicionar o método map() no http.get() para podermos usar http.get().map()
import { PainelModule } from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {routing} from './app.route'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
//Essa anotação em TS transforma meu modulo em um modulo do Angular (fantástico!).
@NgModule({
    //Qual módulo vou utilizar. No nosso caso, é o BrowserModule.
    imports : [BrowserModule, FotoModule, HttpModule, PainelModule,routing, FormsModule, ReactiveFormsModule],
    //Quais componentes vou usar
    declarations : [AppComponent, CadastroComponent, ListagemComponent],
    //Qual declarations eu quero iniciar primeiro? No nosso caso, queremos que o AppComponent seja iniciado primeiro.
    bootstrap:[AppComponent]
})
export class AppModule{}