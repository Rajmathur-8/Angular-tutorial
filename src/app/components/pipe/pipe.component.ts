import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable,map } from 'rxjs';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName = "Angular"

  currentDate: Date = new Date();

  student: any = {
    name: 'Chetan',
    city:'Pune',
    empId:323,
    state:'Bihar'
  }

  currentTime: Observable<Date> = new Observable<Date>;

  constructor(){
    
      this.currentTime = interval(1000).pipe(map(()=> new Date()))
    
  }
}
