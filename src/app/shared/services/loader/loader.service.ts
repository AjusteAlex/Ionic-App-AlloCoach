import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private loadingController:LoadingController
  ) {}

  async openLoader(){
    const loading = await this.loadingController.create({
      message:"Merci de patienter"
    });
    await loading.present()
  }

  async closeLoading() {
  return await this.loadingController.dismiss();
  }
}
