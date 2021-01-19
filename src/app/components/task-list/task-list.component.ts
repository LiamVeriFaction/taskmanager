import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../models/task.model';
import { ITaskList } from '../../models/task-list.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasklist!: ITaskList;
  @Output() taskMove: EventEmitter<any> = new EventEmitter();

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {}

  //Called when task is dropped
  drop(event: CdkDragDrop<ITask[]>) {
    this.taskMove.emit(event);
  }

  //Provides ID's for drop list connection
  getIDs(): string[] {
    return this.taskListService.getIDS();
  }


}
