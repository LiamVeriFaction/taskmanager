import { Injectable } from '@angular/core';
import { ITaskList } from '../models/task-list.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  
  getTaskLists(): ITaskList[] {
    return TASKLIST;
  }
}

const TASKLIST: ITaskList[] = [
  
  { id: 1, title: 'To Do', tag: 'todo' },
  { id: 1, title: 'In Progess', tag: 'progress' },
  { id: 1, title: 'Awaiting Review', tag: 'review' },
  { id: 1, title: 'Completed', tag: 'completed' }

];
