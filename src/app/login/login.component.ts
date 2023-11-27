import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthDTO } from '../DTO/AuthDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  token : string = "";
  loginData: AuthDTO = { login: '', senha: '' };

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  loginError = false;
  messageError = "";

  login() {
    if (this.loginForm.valid) {
      const usuarioControl = this.loginForm.get('usuario');
      const senhaControl = this.loginForm.get('senha');

      if (usuarioControl && senhaControl) {

        this.loginData.login = usuarioControl.value;
        this.loginData.senha = senhaControl.value;

        this.authService.LoginRequest(this.loginData).subscribe(
          (data) => {
            this.token = data;
            this.authService.setToken(data.token);
            this.loginError = false;
            // Aqui você pode redirecionar o usuário ou fazer outras ações pós-login
            this.router.navigate(['pessoas']);
          },
          (error) => {
  
            if (error.error && error.error.message) {
              console.log('Mensagem de erro da API:', error.error.message);
              this.messageError = error.error.message;
            }
            this.loginError = true;
          }
        );
      }
    }
  }
}
