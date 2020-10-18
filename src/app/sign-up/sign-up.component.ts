import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MustMatch} from '../shared/utils/validators'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

form : FormGroup
passIsSame = false
  constructor(private auth: AuthService,   public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form =  this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      confirmPass: new FormControl(null, [Validators.required]),

    },
    {validators: MustMatch('password', 'confirmPass')}

    );
  }
  get f() { return this.form.controls; }
  onSubmit() {
    console.log(this.form.errors)

    // this.form.disable()
    this.auth.registr({
      login: this.form.value.email,
      password: this.form.value.password
    })
  }




}
