import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText: string = 'Testando pipe operator!'
  today: Date = new Date()
  amount: number = 2500.00

}
