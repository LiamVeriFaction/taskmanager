import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListService } from 'src/app/services/task-list.service';
import { TaskService } from 'src/app/services/task.service';
import { ITaskList } from '../../models/task-list.model';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  taskLists$!: Observable<ITaskList[]>;

  constructor(
    private taskListService: TaskListService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskLists$ = this.taskListService.getTaskLists();
  }

  taskMove(event: CdkDragDrop<number[]>) {
    if (event.container === event.previousContainer) {
      this.taskListService.innerMove(
        +event.container.id,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      //Change statusID of Task
      this.taskService.reassignTask(
        event.previousContainer.data[event.previousIndex],
        +event.container.id
      );

      //Change task arrays
      this.taskListService.outerMove(
        event.previousContainer.data[event.previousIndex],
        +event.previousContainer.id,
        +event.container.id,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  /*   taskMove(event: CdkDragDrop<ITask[]>) {
    if (event.container === event.previousContainer) {
      this.tasklists[+event.container.id].tasks = innerMove(
        this.tasklists[+event.container.id].tasks,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      //Change Tag of Task
      this.tasklists[+event.previousContainer.id].tasks[
        event.previousIndex
      ].status = this.tasklists[+event.container.id].tag;

      //Move Tag to new list
      this.tasklists[+event.container.id].tasks.splice(
        event.currentIndex,
        0,
        this.tasklists[+event.previousContainer.id].tasks[event.previousIndex]
      );

      //Delete Tag from old list
      this.tasklists[+event.previousContainer.id].tasks.splice(
        event.previousIndex,
        1
      );
    }
  } */
}
