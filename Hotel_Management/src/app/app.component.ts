import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel_Management';

  constructor(private router :Router){
  }

  journey(journey:string){
    if(journey == 'Admin'){
      //this.dataService.journey = journey;
      this.router.navigateByUrl('/admin')
    }
    else if(journey == 'Owner'){
      //this.dataService.journey = journey;
      this.router.navigateByUrl('/owner')
    }
    else {
      //this.dataService.journey = journey;
      this.router.navigateByUrl('/user')
    }
  }
}
