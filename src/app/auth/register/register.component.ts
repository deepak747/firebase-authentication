import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/confirm-password.validator';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup
  
  constructor(private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    )
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
      this.authService.register(this.registerForm.value)
  }

  isLoading(){
    return this.authService.isLoading;
  }


}
