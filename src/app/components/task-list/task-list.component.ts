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

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  
  @Input() id! : number;
  taskList$! : Observable<ITaskList>;
  listIDS! : string[];

  @Output() taskMove: EventEmitter<any> = new EventEmitter();

  constructor(private taskListService : TaskListService, private taskService : TaskService) {}

  ngOnInit(): void {

    this.taskList$ = this.taskListService.getTaskList(this.id);
    this.taskListService.getIDs().subscribe(ids => this.listIDS = ids);
  }

  //Called when task is dropped
  drop(event: CdkDragDrop<number[]>) {
    this.taskMove.emit(event);
  }


}
