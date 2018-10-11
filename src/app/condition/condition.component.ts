
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,} from '@angular/forms';


@Component({templateUrl: 'condition.component.html'})
export class ConditionComponent implements OnInit {
  conditionForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() { }

}
