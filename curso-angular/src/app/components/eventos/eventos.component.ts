import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  showMessage: boolean = false

  exibirMensagem(): void {
    this.showMessage = !this.showMessage //toggle            
  }

}
