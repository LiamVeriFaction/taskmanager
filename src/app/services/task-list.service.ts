import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { ITaskList } from '../models/task-list.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {

 constructor(private taskService : TaskService){

 }

  getTaskLists(): ITaskList[] {
    return TASKLIST.map((tlist) => {
      tlist.tasks = this.taskService.getTasks(tlist.tag);
      return tlist;
    });
  }

  getIDS(): string[] {
    return TASKLIST.map((track) => {
      return track.id + '';
    });
  }
}

const TASKLIST: ITaskList[] = [
  { id: 0, title: 'To Do', tag: 'todo', tasks: [] },
  { id: 1, title: 'In Progess', tag: 'progress', tasks: [] },
  { id: 2, title: 'Awaiting Review', tag: 'review', tasks: [] },
  { id: 3, title: 'Completed', tag: 'completed', tasks: [] },
];
