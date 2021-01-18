import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';
import { TaskService } from 'src/app/services/task.service';
import { ITaskList } from '../task-list/task-list.module';
import { ITask } from '../task/task.module';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  tasks! : ITask[];
  tasklists! : ITaskList[];

  constructor(private taskService : TaskService, private tasklistservice : TaskListService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
    this.tasklists = this.tasklistservice.getTaskLists();
  }

}
