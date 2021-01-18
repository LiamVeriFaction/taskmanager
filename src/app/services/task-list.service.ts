import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { ITaskList } from '../models/task-list.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  
  getTaskLists(): ITaskList[] {
    return TASKLIST;
  }

  getIDS(): string[]{
   return TASKLIST.map(track => {
     return track.id+"";
   });
  }
}

const TASKLIST: ITaskList[] = [
  
  { id: 1, title: 'To Do', tag: 'todo' },
  { id: 2, title: 'In Progess', tag: 'progress' },
  { id: 3, title: 'Awaiting Review', tag: 'review' },
  { id: 4, title: 'Completed', tag: 'completed' }

];
