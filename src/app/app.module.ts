import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceService } from './service.service';
import { TestComponent } from './test/test.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, TestComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceService]
})
export class AppModule { }
