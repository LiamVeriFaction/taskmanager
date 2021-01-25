import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatAll, filter, first, map } from 'rxjs/operators';
import { TaskData } from '../models/task-data.model';
import { ITask } from '../models/task.model';
import { TaskListService } from './task-list.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = TASKS;
  public tasksSubject = new BehaviorSubject<ITask[]>(this.tasks);

  constructor() {
    this.tasks = TASKS;
  }

  getTasks(id: number): Observable<ITask[]> {
    return this.tasksSubject
      .asObservable()
      .pipe(map((tasks) => tasks.filter((task) => task.listID === id)));
  }

  getTask(id: number): Observable<ITask>{
    return this.tasksSubject.asObservable().pipe(
      concatAll(),
      first((task) => {
        return task.id === id;
      })
    );
  }

  addTask(id: number, data : TaskData) : number{
    let newTask : ITask = {id: this.tasks.length , title : data.title, description : data.description, listID : id}
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
    return newTask.id;
  }

  reassignTask(id:number, newList:number){
    this.tasks[id].listID = newList;
    this.tasksSubject.next(this.tasks);
  }

}


const TASKS: ITask[] = [
  {
    id: 0,
    title: 'Grab Bread',
    description: 'Pull 2 slices of bread out of draw',
    listID: 3,
  },
  {
    id: 1,
    title: 'Grab Peanut Butter',
    description: 'Preferably Black Cat',
    listID: 2,
  },
  {
    id: 2,
    title: 'Grab Jam',
    description: 'Strawberry or nothing!',
    listID: 2,
  },
  {
    id: 3,
    title: 'Grab Knife',
    description: 'A butterknife will do',
    listID: 3,
  },
  {
    id: 4,
    title: 'Apply Peanut Butter to Bread',
    description: 'Spread corner to corner',
    listID: 1,
  },
  {
    id: 5,
    title: 'Apply Jam to Bread',
    description: 'Spread corner to corner',
    listID: 1,
  },
  {
    id: 6,
    title: 'Put pieces of bread together',
    description: 'Watch for spillage',
    listID: 0,
  },
  {
    id: 7,
    title: 'Cut diagonally',
    description: 'Who even cuts into squares?',
    listID: 0,
  },
  {
    id: 8,
    title: 'Eat sandwich',
    description: 'Yum!',
    listID: 0,
  },
];
