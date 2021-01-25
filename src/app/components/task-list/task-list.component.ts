import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../models/task.model';
import { ITaskList } from '../../models/task-list.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskListService } from 'src/app/services/task-list.service';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskInputBoxComponent } from '../dialogs/task-input-box/task-input-box.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() id!: number;
  taskList$!: Observable<ITaskList>;
  listIDS!: string[];

  @Output() taskMove: EventEmitter<any> = new EventEmitter();

  constructor(
    private taskListService: TaskListService,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.taskList$ = this.taskListService.getTaskList(this.id);
    this.taskListService.getIDs().subscribe((ids) => (this.listIDS = ids));
  }

  //Called when task is dropped
  drop(event: CdkDragDrop<number[]>) {
    this.taskMove.emit(event);
  }

  openDialog() {
    let taskDialog = this.dialog.open(TaskInputBoxComponent, {
      width: '250px',
      data: {title: '', description: ''}
    });

    taskDialog.afterClosed().subscribe((result) => {
      if(result){
      let taskID = this.taskService.addTask(this.id, result);
      this.taskListService.addTask(this.id, taskID);
      }
    });
  }
}

