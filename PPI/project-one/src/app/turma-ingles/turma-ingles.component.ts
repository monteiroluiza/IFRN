import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-ingles',
  templateUrl: './turma-ingles.component.html',
  styleUrls: ['./turma-ingles.component.scss']
})
export class TurmaInglesComponent implements OnInit {
  nome:string;
  
  constructor() { 
    this.nome = 'Malu';
  }

  ngOnInit(): void {
    
  }

}
