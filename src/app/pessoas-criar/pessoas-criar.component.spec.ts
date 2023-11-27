import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCriarComponent } from './pessoas-criar.component';

describe('PessoasCriarComponent', () => {
  let component: PessoasCriarComponent;
  let fixture: ComponentFixture<PessoasCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PessoasCriarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
