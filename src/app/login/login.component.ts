import { AuthorizationService } from './../authorization.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, delay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginform: FormGroup;
  invalidPassword = false;
  invalidUsername = false;
  loading = false;

  constructor(private authorizationService: AuthorizationService,
              private fb: FormBuilder, private router: Router) {

    // redirect to home if already logged in
    if (this.authorizationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginform.controls; }

  onSubmit() {
    this.invalidPassword = false;
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    if (this.loginform.invalid) {
      // this.invalidPassword = true;

      return;
    }

    this.authorizationService.login(this.f.username.value, this.f.password.value)
      .pipe(
        first(),
        delay(2000),
      )
      // tslint:disable-next-line: deprecation
      .subscribe(
        data => {
          this.router.navigate(['/sponsor']);

        },
        // tslint:disable-next-line:no-shadowed-variable
        (error: any) => {
          console.log('err', error);
          if (error instanceof HttpErrorResponse) {
            console.log(error.status);
            if (error.status === 401 || error.status === 403) {
              // invalid username or password
               this.invalidPassword = true;
            }
          }

          // this.alertService.error(error);
          this.loading = false;
        });
      }

    }
