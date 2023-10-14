import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Ismael'
  userData = {
    email: 'ismael@mail.com',
    role: 'Admin'
  }
  title = 'curso-angular';
}
