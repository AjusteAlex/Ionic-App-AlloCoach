import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

// Permet de forcer l'utilisateur a passer une première fois dans la page d'intro

export const INTRO_KEY = 'Il-a-vu-lintro';
 
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
 
  constructor(private router: Router) { }
 
  async canLoad(): Promise<boolean> {
      const hasSeenIntro = await Storage.get({key: INTRO_KEY});   
      if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
        return true;
      } else {
        this.router.navigateByUrl('/intro', { replaceUrl:true });
        return false;
      }
  }
}
