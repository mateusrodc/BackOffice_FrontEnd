import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pessoas-criar',
  templateUrl: './pessoas-criar.component.html',
  styleUrl: './pessoas-criar.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class PessoasCriarComponent implements OnInit  
{

  constructor(private router: Router) { }
  ngOnInit() 
  {
    
  }
}
