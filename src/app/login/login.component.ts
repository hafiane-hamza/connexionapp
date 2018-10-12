import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    public formBuilder: FormBuilder,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]], //min 3
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() { }
  login() {
    this.router.navigate(['/condition']);
  }

}
