import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TaskListService } from 'src/app/services/task-list.service';
import { TaskService } from 'src/app/services/task.service';
import { ITaskList } from '../../models/task-list.model';
import { ITask } from '../../models/task.model';
import { TaskInputBoxComponent } from '../dialogs/task-input-box/task-input-box.component';
import { TaskListInputBoxComponent } from '../dialogs/task-list-input-box/task-list-input-box.component';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  taskLists$!: Observable<ITaskList[]>;
  listOrder$! : Observable<number[]>;

  constructor(
    private taskListService: TaskListService,
    private taskService: TaskService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.taskLists$ = this.taskListService.getTaskLists();
    this.listOrder$ = this.taskListService.getListOrder();
  }


  
  drop(event: CdkDragDrop<any>, taskLists : number[]) {
    moveItemInArray(taskLists, event.previousIndex, event.currentIndex);
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

  openDialog() {
    let taskDialog = this.dialog.open(TaskListInputBoxComponent, {
      width: '250px',
      data: {title: '', tag: ''}
    });

    taskDialog.afterClosed().subscribe((result) => {
      if(result){
        this.taskListService.addTaskList(result);
      }
    });
  }

}
