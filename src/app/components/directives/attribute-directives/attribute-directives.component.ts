import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {

  div1BgColor: string='bg-primary';
  isdiv2BgColor: boolean=false;

  addRedDiv1(){
    this.div1BgColor='bg-danger'
  }
  addBlueDiv1(){
    this.div1BgColor='bg-primary'
  }
  toggleDiv2(){
    this.isdiv2BgColor=! this.isdiv2BgColor
  }

}
