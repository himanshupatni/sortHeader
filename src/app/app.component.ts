import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sortHeader';
  loginForm: FormGroup;
  submit: Boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get formValue() {
    return this.loginForm.controls;
  }
  submitLoginForm() {
    this.submit = true;
    if (this.loginForm.invalid) {
      this.submit = false;
      return;
    }

    this.router.navigateByUrl('sort');
  }
}
