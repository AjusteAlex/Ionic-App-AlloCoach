import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService:AuthService, 
    private fb:FormBuilder, 
    private router:Router,
    private loaderService:LoaderService
    ) {}

  login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit() { }
  submit(){ 
    this.authService.login(this.login.value)
    .then(()=> {
      this.loaderService.openLoader()
      this.router.navigateByUrl('/home', { replaceUrl: true });
    })
      .catch(err => console.log(err))
  }

}
