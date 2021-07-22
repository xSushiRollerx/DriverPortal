import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { DriverHttpService } from '../../services/driver-http.service'
import { Driver } from '../models/driver';

@Component({
  selector: 'app-read-driver',
  templateUrl: './read-driver.component.html',
  styleUrls: ['./read-driver.component.css']
})
  export class ReadDriverComponent implements OnInit {
    driver?: Driver;

    constructor(
      private driverService: DriverHttpService,
    ) {
    }
  
    ngOnInit(): void {
      this.loadAccount();
    }
  
    loadAccount(): void {
      this.driverService.readDriver("driver1")
      .subscribe(
        (info) => {
          this.driver = info;
          console.log(info);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  
  }