import { Component, OnInit,Injectable, Input, Output, EventEmitter } from '@angular/core';
import { PessoasService } from '../pessoas-service.service';
import { PessoasDTO } from '../DTO/PessoasDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrl: './pessoas-lista.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class PessoasListaComponent implements OnInit 
{
  public pessoas: Array<PessoasDTO> = [];
  selectedTipoPessoa: number = 1;

  @Output() output = new EventEmitter<any>();
  constructor(private pessoasService: PessoasService, private router: Router) {}
  ngOnInit()
  {
    this.listarPessoas();
  }
  listarPessoas()
  {
    this.pessoasService.ListarPessoasRequest(this.selectedTipoPessoa).subscribe(
      (data) => {
        this.pessoas = data;
        console.log(data);
      },
      (error) => {

        if (error.error && error.error.message) {
          console.log('Mensagem de erro da API:', error.error.message);
        }
      }
    );
  }
  cadastrar()
  {
    this.router.navigate(['cadastrar']);
  }
  
}
