import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from '../task/task.module';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  tasks! : ITask[];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }

}
