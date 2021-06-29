import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  constructor() {}

  getEmployees(): any {
    return [{ name: 'Amit' }, { name: 'Shivam' }, { name: 'Rahul' }];
  }
}
