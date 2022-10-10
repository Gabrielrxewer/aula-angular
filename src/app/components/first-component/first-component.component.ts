import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Gabriel';
  age: number = 18;
  job = 'Programador';
  hobbie = ['Jiu-jitsu', 'Estudar', 'CS:GO'];
  car = {
    name: 'BMW',
    year: 2020,
  };

  constructor() {}

  ngOnInit(): void {}
}
