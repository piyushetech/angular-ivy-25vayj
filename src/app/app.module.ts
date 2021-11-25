import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from './services/mockData.service';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HighlightDirective],
  bootstrap: [AppComponent],
  providers: [MockDataService],
})
export class AppModule {}
