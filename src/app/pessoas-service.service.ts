import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PessoasDTO } from './DTO/PessoasDTO';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private environment = {
    api_URL : 'http://localhost:5170/api'
  };

  constructor(private http: HttpClient, private authService: AuthService) { }


  public ListarPessoasRequest(tipoPessoa : number) : Observable<Array<PessoasDTO>>
  {
    const token = this.authService.getToken();

    // Configure o cabeçalho da requisição com o token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Adicione o token ao cabeçalho
    });

    return this.http.get<Array<PessoasDTO>>(`${this.environment.api_URL}/pessoa/listar?tipoPessoa=${tipoPessoa}`,{headers})
    .pipe(
      catchError((error: any) => {
        console.error('Erro na solicitação de listagem de pessoas:', error);
        throw error; // Rejeita o Observable com o erro
      })
    );
  }
}
