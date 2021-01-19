import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';
import { TaskService } from 'src/app/services/task.service';
import { ITaskList } from '../../models/task-list.model';
import { ITask } from '../../models/task.model';

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


  filterTasks(taskList : ITaskList) : ITask[]{
    return this.tasks.filter((task) => {
      return task.status === taskList.tag
    })
  }

  taskMove(event: CdkDragDrop<ITask[]>){
    console.log("From "+event.previousContainer.id +": " + event.previousIndex);
    console.log("To "+event.container.id +": " + event.currentIndex);
    this.filterTasks(this.tasklists[+event.previousContainer.id])[event.previousIndex].status=
    this.tasklists[+event.container.id].tag

  }

}
