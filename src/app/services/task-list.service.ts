import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatAll, filter, find, first, map } from 'rxjs/operators';
import { ITaskList } from '../models/task-list.model';
import { ITask } from '../models/task.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private taskList = TASKLIST;
  public taskListSubject = new BehaviorSubject<ITaskList[]>(this.taskList);

  constructor(private taskService: TaskService) {}

  public getTaskLists(): Observable<ITaskList[]> {
    return this.taskListSubject.asObservable();
  }

  public getTaskList(id: number): Observable<ITaskList> {
    return this.taskListSubject.asObservable().pipe(
      concatAll(),
      first((task) => {
        return task.id === id;
      })
    );
  }

  public getIDs(): Observable<string[]> {
    return this.taskListSubject.asObservable().pipe(
      map((taskLists) =>
        taskLists.map((tasklist: ITaskList) => {
          return tasklist.id + '';
        })
      )
    );
  }
}

const TASKLIST: ITaskList[] = [
  { id: 0, title: 'To Do', tag: 'todo', tasks: [6, 7, 8] },
  { id: 1, title: 'In Progess', tag: 'progress', tasks: [4, 5] },
  { id: 2, title: 'Awaiting Review', tag: 'review', tasks: [1, 2] },
  { id: 3, title: 'Completed', tag: 'completed', tasks: [0, 3] },
];
