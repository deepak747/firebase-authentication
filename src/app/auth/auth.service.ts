import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthentication: boolean = false;
  isLoading: boolean = false;
  submitted = false;
  constructor(private router: Router) { }
  login(data: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        alert("login Successfully")
        this.isAuthentication = true;
        this.router.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credential does not match our records')
        this.isAuthentication = false;
      }).finally(() => (this.isLoading = false))
    console.log("login Form value is:", data.email)
  }

  register(data: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.submitted = true;

    if (data.password != data.confirm_password) {

    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)

      .then((userCredential) => {
        alert("Register Successfully....")
        this.isAuthentication = true

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthentication = false;
        // ..
      }).finally(() => {
        this.isLoading = true;
      })

  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
       this.isAuthentication=false;
    }).catch((error) => {
      // An error happened.
    });
  }

}
