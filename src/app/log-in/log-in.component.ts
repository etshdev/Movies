import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  err: string;
  islogin: boolean = false;
  constructor(public _AuthService: AuthService, public _Router: Router) { }

  loginform: FormGroup = new FormGroup({

    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }
  getFormData(formData) {
    if (formData.valid == true) {
      this._AuthService.signIn(formData.value).subscribe(data => {
        if (data.message == 'success') {
          this._AuthService.saveUserData(data.user, data.token)
          this.islogin=true;
          this._Router.navigate(['/TrendingMovies'])

        }
        else {
          this.islogin=false;
          this.err = 'Email or Password is Wrong'
        }


      })


    }

  }

}
