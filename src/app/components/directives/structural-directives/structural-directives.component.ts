import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isDivisible: boolean=true
  isDiv2Visible: boolean=true
  num1=""
  num2=""

  constructor(private router: Router){

  }

cityArray: string[] = ["Pune","Mumbai","Delhi","Patna"]


navigateToAttributer(){
this.router.navigateByUrl("attribute-directive")
}

  showDivi(){
    this.isDivisible=true
  }
  hideDivi(){
    this.isDivisible=false
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible
    // if(this.isDiv2Visible == true){
    //   this.isDiv2Visible = false
    // }else{
    //   this.isDiv2Visible= true
    // }
  }
}
