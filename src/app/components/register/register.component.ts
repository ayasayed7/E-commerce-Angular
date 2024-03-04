import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm: FormGroup=new FormGroup({
  name: new FormControl(null,[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
  email: new FormControl(null,[Validators.required , Validators.email]),
  password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  rePassword: new FormControl(null,[Validators.required]),
  phone: new FormControl(null ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
}, {validators:this.checkRePasswordMatch});


  isLoading: boolean=false;
  apiError:string='';

constructor(private _AuthService:AuthService , private _Router:Router){}

registerButton(dataForm: FormGroup){
  this.isLoading=true;

  console.log(dataForm);

  if(dataForm.valid){

    this._AuthService.signUp(dataForm.value).subscribe({

      next: (response)=>{
        console.log(response);
        if(response.message === 'success'){
          this._Router.navigate(['/login'])
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


checkRePasswordMatch (form: any){
  if(form.get('password')?.value=== form.get('rePassword')?.value){
    return null;
  }
    else{
      form.get('rePassword')?.setErrors({rePasswordMatch : 'rePassword not match' })
      return {rePasswordMatch : 'rePassword not match' }
    }

}
}
