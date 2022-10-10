import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Beatriz';
  myCar = 'BMW M8';
  title = 'portfolio';
  userData = {
    email: 'beatriz@gmail.com',
    aparencia: 'Morena, de 1.72 de altura',
    profissao: 'Economia',
    area: 'Pesquisa',
  };
}
