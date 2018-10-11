import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    public formBuilder: FormBuilder,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() { }
  login() {
    this.router.navigate(['/condition']);
          //this.router.navigate([this.returnUrl]);
          //setTimeout(() => {
           // location.reload();
          //}, 1000)


  }

}
