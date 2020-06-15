import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BehaviorSubject } from "rxjs";
import { UserData } from "./userData";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public _HttpClient:HttpClient ) { }

  userData=new BehaviorSubject (null);

  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data)
  }
  signIn(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',data)
  }
  saveUserData(citizen,token)
  {
    let user = new UserData (citizen.first_name,citizen.last_name,citizen.email ,token)
    this.userData.next(user);
  }
}
