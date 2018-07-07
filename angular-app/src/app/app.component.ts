import { Component, OnInit } from '@angular/core';
import { LoaderService } from './components/loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  objLoaderStatus: boolean = false;

  constructor(
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.loaderService.loaderState.subscribe(
      (val) => {
        this.objLoaderStatus = val
        console.log(val)
      });
  }
}