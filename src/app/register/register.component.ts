import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err: string;
  constructor(public _AuthService: AuthService, public _Router: Router) { }

  registerForm: FormGroup = new FormGroup({

    'first_name': new FormControl(null, Validators.required),
    'last_name': new FormControl(null, Validators.required),
    'age': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),

  })


  ngOnInit(): void {
  }
  getFormData(formData) {

    if (formData.valid == true) {
      this._AuthService.signUp(formData.value).subscribe(data => {
        if (data.message == 'success') {
          this._Router.navigate(['/login'])

        }
        else {
          this.err = 'mail is Already registed'
        }


      })
      console.log(formData)

    }



  }
}
