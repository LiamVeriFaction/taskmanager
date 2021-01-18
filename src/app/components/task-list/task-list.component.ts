import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../models/task.model';
import { ITaskList } from '../../models/task-list.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()tasks! : ITask[];
  @Input()tasklist! : ITaskList;

  constructor() { }

  ngOnInit(): void {
  }

}
