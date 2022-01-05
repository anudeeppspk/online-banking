import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    Firstname: new FormControl(''),
    Lastname: new FormControl(''),
    Email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
  }); 

  submit() {
    if (this.form.valid) {
      alert("hi")
    }
  }


  ngOnInit(): void {
  }

}
