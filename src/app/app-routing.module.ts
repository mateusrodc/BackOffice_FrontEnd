import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { AuthGuard } from './auth.guard';
import { PessoasCriarComponent } from './pessoas-criar/pessoas-criar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pessoas', component: PessoasListaComponent, canActivate : [AuthGuard]},
  { path: 'cadastrar', component: PessoasCriarComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
