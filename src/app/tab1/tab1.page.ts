import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peso:number = 0;
  altura:number = 0;
  imc:number = 0;

  calcular(){
    if(this.peso !== undefined && this.altura !== undefined){
      this.imc = this.peso / (this.altura * this.altura);
    }
    else{
      this.imc = 0;
    }
  }

  constructor(public toastcontroller : ToastController) {}

  async exibirMensagem(){
    const toast = await this.toastcontroller.create({
      message:"Atencao voce clicou em gravar!",
      duration:5000
    })
    toast.present();
  }
  

}
