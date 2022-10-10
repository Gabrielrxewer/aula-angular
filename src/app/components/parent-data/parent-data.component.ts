import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() car: string = '';
  @Input() dados!: {
    email: string;
    profissao: string;
    aparencia: string;
    area: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
