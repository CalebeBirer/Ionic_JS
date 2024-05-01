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
  status_imc:string = "STATUS"

  calcular(){
    if(this.peso !== undefined && this.altura !== undefined){
      this.imc = this.peso / (this.altura * this.altura);
    }
    else{
      this.imc = 0;
    }

    if(this.imc > 0 && this.imc <= 10){
      this.status_imc = "magrin"
    }else if(this.imc > 10 && this.imc <= 24){
      this.status_imc = "mais ou menos"
    }else{
      this.status_imc = "ta em ordem"
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
