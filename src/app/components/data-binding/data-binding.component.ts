import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string="Angular 18";
  intputType = "checkbox";
  rollNo: number=123
  id=123
  isIndian:boolean=true;
  currentDate: Date=new Date();
  myClassname="bg-danger";
  firstName=signal("Raj Mathur")

  constructor(){
     
  }
  showAlert(message: string){
    alert(message);
  }
  changeCourseName(){
    this.courseName = 'React Js'
    this.firstName.set("Sanju Samsang")
  }
}
