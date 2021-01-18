import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../task/task.module';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()tasks! : ITask[];

  constructor() { }

  ngOnInit(): void {
  }

}
