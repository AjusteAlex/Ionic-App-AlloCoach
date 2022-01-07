import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/'

  // Get all localisations
  getlocalisations():Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'localisations')
      .subscribe({
        next: localisations => { 
          const localisationOk =  Object.entries(localisations).map(localisation => {
            localisation[1].key = localisation[0]      
            return localisation[1];
          })
          resolve(localisationOk) },
        error: () => reject,
      })
    })
  }
}
