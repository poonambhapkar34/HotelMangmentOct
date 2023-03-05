import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  
  constructor(private router :Router){}
 
   signIn(){
    this.router.navigateByUrl('/signIn')
   }

   signUp(){
    this.router.navigateByUrl('/signUp')
   }
}
