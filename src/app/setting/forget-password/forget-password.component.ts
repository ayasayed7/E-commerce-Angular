import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
step1:boolean = true;
step2:boolean = false;
step3:boolean = false;
email:string = '';
Msg:string = '';

constructor(private _ForgetpasswordService:ForgetpasswordService , private _Router:Router){}




forgotForm:FormGroup = new FormGroup({
  email: new FormControl(null,[Validators.required])
})

resetCodeForm:FormGroup = new FormGroup({
  resetCode: new FormControl(null,[Validators.required])
})

resetPassword:FormGroup = new FormGroup({
  newPassword: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
})


forgotPassword():void {
  let UserEmail =this.forgotForm.value;

  this.email = UserEmail.email;
  this._ForgetpasswordService.forgotPassword(UserEmail).subscribe({
    next:(response) =>{
      console.log(response);
      this.Msg = response.message;
      this.step1=false;
      this.step2=true;
    },
    error:(err) =>{
      this.Msg = err.error.message;

    }
  })
}

resetCode():void {
  let resetCode = this.resetCodeForm.value;
  this._ForgetpasswordService.resetCode(resetCode).subscribe({
    next: (response) => {
      this.Msg = response.status;
      this.step2=false;
      this.step3=true;
    },
    error:(err) =>{
      this.Msg = err.error.message;

    }
  })
}

newPassword():void {
  let resetForm= this.resetPassword.value;
  resetForm.email= this.email;
  this._ForgetpasswordService.resetPassword(resetForm).subscribe({
    next: (response) => {
      console.log(response);
      if(response.token){
        localStorage.setItem('userToken', response.token);
        this._Router.navigate(['/home'])
      }

    },
    error:(err) =>{
      this.Msg = err.error.message;

    }
  })
}
}
