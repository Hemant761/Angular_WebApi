import { Component } from '@angular/core';
import { AppService } from './app.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ClientApp';

  constructor(private appService: AppService) {

  }

  ngOnInit() {
this.appService.get().subscribe(value=>this.title=value);
  }
}
