import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public bgColor = '#eee';

  constructor(private fb: FormBuilder) {   }

  loginForm = this.fb.group({
    email: [null,[Validators.required,Validators.email]],
    password: [null,[Validators.required,Validators.minLength(6)]]
  });

  ngOnInit(): void {
  }

}
