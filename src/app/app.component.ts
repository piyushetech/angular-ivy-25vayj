import { Component, VERSION } from '@angular/core';
import { MockDataService } from './services/mockData.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Observable and CSS grid demo'
  public comments = [];

  constructor(private _mockDataService: MockDataService) {}
  ngOnInit() {
    this._mockDataService
      .getComments()
      .subscribe((data) => (this.comments = data));
  }
}
