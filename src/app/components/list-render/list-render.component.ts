import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 18 },
    { name: 'Tom', type: 'Cat', age: 5 },
    { name: 'Frida', type: 'Dog', age: 12 },
    { name: 'Bob', type: 'Horse', age: 22 },
  ];

  animalDetails = ''

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `o Pet ${animal.name} tem ${animal.age} anos`
  }
}
