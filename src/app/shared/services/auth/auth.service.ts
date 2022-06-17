import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

import { Storage } from '@capacitor/storage';

const TOKEN_KEY = '';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
    ) {}

  login(data:any): Promise<any>{
    return new Promise((resolve, reject)=> {
      this.http.post('http://localhost:3000/users/login', data)
      .subscribe({
        next: (token:any) => {
          token = token.token;
          if(!token){
            alert('Identifiant incorrect')
            return false
          }else{
            Storage.set({key: 'userToken',  value: token})
            resolve(token)
          }
        }
      })
    })
  }

}
