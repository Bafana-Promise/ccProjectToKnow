import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.scss']
})
export class LoginRegComponent implements OnInit {

  showLogReg: boolean = false;
  login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    role: new FormControl('Super User')
  });

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    // if () {

    //   this.snackBar.open('Please Enter Details', 'ok');
    // }
    this.router.navigate(["/home"])
    console.log(this.login);
  }

  onSubmitReg() {
    console.log(this.registerForm.value);
// bh.endPoint = (bh.input.event == "Draft") ? 'addTravelRequest?type=draft' : 'addTravelRequest';
// bh.method = "post";
  }

}
