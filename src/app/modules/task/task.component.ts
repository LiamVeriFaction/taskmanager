import { Component, Input, OnInit } from '@angular/core';
import { ITask } from './task.module';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  @Input()task! : ITask

}
