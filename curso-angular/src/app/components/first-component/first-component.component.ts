import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Carlos'
  profissao: string = 'Programador'
  idade: number = 31
  hobbies = ['Correr', 'Estudar', 'Programar']
  veiculo = {
    tipo: 'Moto',
    modelo: 'Bros',
    ano: 2022
  }

  constructor(){}

  ngOnInit(): void {}

}
