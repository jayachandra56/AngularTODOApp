import { Component ,Input, ViewChild} from '@angular/core'
import { Form2 } from '../Form2/form2.component';

@Component({
  selector : 'app-form1',
  templateUrl : './form1.component.html',
  styleUrls : ['./form1.component.css']
})

export class Form1 {
  form1:string = '';

  @Input() FromParenttt?: string;

  @ViewChild (Form2) fromChild?: any

}