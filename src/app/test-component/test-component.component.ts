import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  list = [];

  constructor(private _employee: ServiceService) {}

  ngOnInit() {
    this.list = this._employee.getEmployees();
  }
}
