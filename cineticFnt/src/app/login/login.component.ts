import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUsuario = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    this.api.login(this.formUsuario.value)
      .subscribe(
        data=>{
          console.log(data)
        }
      )
  }
}
