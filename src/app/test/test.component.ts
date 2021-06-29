import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-test',
  template: `
    <ul *ngFor="let data of list">
      <h1>{{ data.name }}</h1>
    </ul>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  list = [];

  constructor(private _employee: ServiceService) {}

  ngOnInit() {
    this.list = this._employee.getEmployees();
  }
}
