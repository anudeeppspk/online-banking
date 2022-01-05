import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  isLoggedin = false;

  constructor() { }

  isLoggedIn(value:boolean) {
    this.isLoggedin = value;
  }
  getValue(){
     return this.isLoggedin;
  }
}
