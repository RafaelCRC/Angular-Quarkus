import { Component, OnInit } from '@angular/core';
import { HelloViewerService } from './hello-viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hi: String | undefined;

  constructor(private helloViewerService: HelloViewerService) { }


  ngOnInit(): void {
    this.hello();
  }

  private hello() {
      this.helloViewerService.getHello().subscribe((data: any) => console.log(data) );
  }

  title = 'frontend';
}
