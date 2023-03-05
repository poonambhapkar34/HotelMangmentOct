import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  getApiData :any
  signIndata :any;
 // userDataForm!: FormGroup;
ngOnInit(){
  
 // let url=   http://localhost:3000/post
 //getAPi call
 //this.getApiData =respo
}
  submit(){
   //this.signIndata = this.userDataForm.value;
    if(this.getApiData.userName == this.signIndata.userName && this.getApiData.userPass == this.signIndata.password ){
      //if(this.dataService.journey =='Owner'){
      //  this.router.navigateByUrl('/owner/success')
      //}else {
       // this.router.navigateByUrl('/user/success')
     // }
     
    }
    // else{
    //   this.router.navigateByUrl('/signIn')
    // }
  }
}
