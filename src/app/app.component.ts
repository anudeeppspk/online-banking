import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  // isLoggedIn:boolean=false;

  isLoggedIn$!: Observable<boolean>;

  constructor(private appService: AppService, private authService: AuthService){
    
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  logOut(){
    alert("dbkj")
    this.authService.logout();
  }
}
