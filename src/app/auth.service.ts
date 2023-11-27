import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { AuthDTO } from './DTO/AuthDTO';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  

  private environment = {
    api_URL : 'http://localhost:5170/api'
  };

  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  

  public LoginRequest(login : AuthDTO) : Observable<any>
  {
    return this.http.post<any>(`${this.environment.api_URL}/usuario/login`, login).pipe(
      catchError((error: any) => {
        console.error('Erro na solicitação de login:', error);
        throw error;
      })
    );
  }

  public getToken(): string | null 
  {
    return localStorage.getItem(this.tokenKey);
  }

  public setToken(token: string): void 
  {
    localStorage.setItem(this.tokenKey, token);

    const timeoutInMinutes = 30;
    setTimeout(() => {
      this.clearToken();
    }, timeoutInMinutes * 60 * 1000);
  }

  public clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isAuthenticated(): boolean 
  {
    return !!this.getToken();
  }
  

}
