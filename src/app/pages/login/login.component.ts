import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AppSettings} from '../../app.settings';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public phone:AbstractControl;
  public submitted:boolean = false;
  public callback:boolean = false;
  public code:string;

  constructor(fb:FormBuilder, route: ActivatedRoute) {
    this.form = fb.group({
      'phone': ['', Validators.compose([Validators.required])]
    });

    this.phone = this.form.controls['phone'];
    this.code = route.snapshot.queryParams["code"];

    if(this.code){
      this.callback = true;
      this.doLogin(this.code);
    }
  }

  /** Submitting the phone number and redirect to MIG for authentication */
  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid){
        window.location.href = AppSettings.getAuthUrl(this.phone.value);
    }
  }

  /** Send the code and get the access token */
  public doLogin(code:string):void{
    //todo:login logic goes here
    //todo:send the code to backend and get access token
    alert(code);
  }
}
