import { Component } from '@angular/core';

@Component({
  selector : 'app-form2',
  templateUrl : './form2.component.html'
})

export class Form2 {

  fromChild:string = ''
  
  onKeyPress(){
    console.log("fromChild - ",this.fromChild)
  }
}