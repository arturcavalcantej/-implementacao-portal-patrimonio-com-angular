import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bem } from "../../shared/bens.model";
import { BensService } from '../../shared/services/bens.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  bens: Bem[];

  bemForm: FormGroup;

  constructor(
    private bensService: BensService,private location: Location,
    private router: Router,
    ) { }

  

  ngOnInit(): void {
    const date = new Date
    const today = String(date.getFullYear()) + '-' + String(date.getMonth()+1) + '-' + String(date.getDate())
    this.bensService.getAll()
      .subscribe( c => this.bens = c),
    
    this.bemForm = new FormGroup({
      'marca': new FormControl('', [Validators.required]), 
      'quantidade': new FormControl('', [Validators.required]),
      'valor_unitario': new FormControl('', [Validators.required]), 
      'inicio_garantia': new FormControl('', [Validators.required]),
      'termino_garantia': new FormControl('', [Validators.required]),
      'observacoes': new FormControl(''),
      'estado': new FormControl('Bom'), 
      'situacao': new FormControl('Em uso'),
      'data_cadastro': new FormControl(today),
      'tombamento': new FormControl('')
    })
  }
  onSubmit(){
    const newCont = this.bemForm.value
    newCont.tombamento = newCont.termino_garantia.split('-')[0] + '123456'
    this.bensService.create(newCont)
      .subscribe( _ => this.goBack())
  }

  del(bem: Bem, i: number){
    if (confirm("Tem certeza que deseja remover este bem?"))
    this.bensService.delete(bem) 
    .subscribe( _ => {
      this.bens.splice(i, 1)
    })
  }

  goBack(){
     this.router.navigateByUrl('/');
  }
}