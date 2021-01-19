import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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
  tasklists!: ITaskList[];

  constructor(private tasklistservice: TaskListService) {}

  ngOnInit(): void {
    this.tasklists = this.tasklistservice.getTaskLists();
  }

  taskMove(event: CdkDragDrop<ITask[]>) {
    if (event.container === event.previousContainer) {
      console.log(
        'Inner move: From: ' +
          event.previousIndex +
          ' To: ' +
          event.currentIndex
      );

      this.tasklists[+event.container.id].tasks 
      = array_move(this.tasklists[+event.container.id].tasks,
        event.previousIndex,
        event.currentIndex)

    }
  }
}

function array_move(arr: ITask[], oldI: number, newI: number) : ITask[] {
  var temp = arr[oldI]
  arr.splice(oldI,1)
  arr.splice(newI,0,temp)
  return arr
}

