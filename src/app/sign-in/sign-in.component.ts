import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSab: Subscription
  constructor(private auth : AuthService,
   private router: Router,
   private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });

    this.route.queryParams.subscribe((params: Params)=> {
      if(params["registered"]) {
        // теперь вы можете зайти в систему используя свои данные
      }else if(params["accessDenied"]) {
        // для начала авторизуйтесь в системе
      }
    })
  }

  ngOnDestroy() {
    if(this.aSab) {
      this.aSab.unsubscribe()
    }

  }

  onSubmit() {

this.form.disable()
 this.aSab = this.auth.login(
      {login: this.form.value.email,
        password: this.form.value.password
    }).subscribe(
      ()=> {console.log('login success')
    this.router.navigate([''])
    },
      error=> {
        console.warn('error')
        this.form.enable()
      }
    )

  }

}
