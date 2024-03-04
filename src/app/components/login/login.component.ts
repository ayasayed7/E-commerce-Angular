import { Component } from '@angular/core';
import { FormControl,FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logInForm: FormGroup=new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
    password : new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  });


  isLoading: boolean=false;
  apiError:string='';

constructor(private _AuthService:AuthService , private _Router:Router){}

submitLogIn(dataForm: FormGroup){
  this.isLoading=true;

  console.log(dataForm);

  if(dataForm.valid){

    this._AuthService.signIn(dataForm.value).subscribe({

      next: (response)=>{
        console.log(response);
        if(response.message === 'success'){
          localStorage.setItem('userToken', response.token);
          this._AuthService.decoderUserToken();
          this._Router.navigate(['/home'])
          this.isLoading=false;
        }
      },

      error: (err)=>{
        console.log(err);
        this.isLoading=false;
        this.apiError=err.error.message;
      }


    });
  }
}
}
