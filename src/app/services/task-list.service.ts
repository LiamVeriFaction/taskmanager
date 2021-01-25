import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatAll, filter, find, first, map } from 'rxjs/operators';
import { TaskListData } from '../models/task-data.model';
import { ITaskList } from '../models/task-list.model';
import { ITask } from '../models/task.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private taskList = TASKLIST;
  private listOrder = LISTORDER;
  public taskListSubject = new BehaviorSubject<ITaskList[]>(this.taskList);
  public listOrderSubject = new BehaviorSubject<number[]>(this.listOrder);

  constructor(private taskService: TaskService) {
  }

  public getListOrder():Observable<number[]>{
    return this.listOrderSubject.asObservable();
  }

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

  public addTask(id :number, taskID : number){
    this.taskList[id].tasks.push(taskID);
    this.taskListSubject.next(this.taskList);
  }

  public innerMove(id: number, prevIndex: number, newIndex :number){
    this.taskList[id].tasks = innerMove(this.taskList[id].tasks,prevIndex,newIndex);
    this.taskListSubject.next(this.taskList);
  }

  public outerMove(id:number, prevList: number, newList:number, prevIndex :number, newIndex : number ){
    this.taskList[prevList].tasks.splice(prevIndex,1);
    this.taskList[newList].tasks.splice(newIndex,0,id);

    this.taskListSubject.next(this.taskList);

  }

  public addTaskList(data : TaskListData){

    let newTaskList : ITaskList = {id: this.taskList.length, title: data.title, tag: data.tag, tasks: []}
    this.taskList.push(newTaskList);
    this.listOrder.push(newTaskList.id);

    this.taskListSubject.next(this.taskList);
    this.listOrderSubject.next(this.listOrder);
  }
}

function innerMove(arr: number[], oldI: number, newI: number): number[] {
  var temp = arr[oldI];
  arr.splice(oldI, 1);
  arr.splice(newI, 0, temp);
  return arr;
}


const LISTORDER: number[] = [ 0, 2, 1, 3, 4]

const TASKLIST: ITaskList[] = [
  { id: 0, title: 'To Do', tag: 'todo', tasks: [6, 7, 8] },
  { id: 1, title: 'Awaiting Review', tag: 'review', tasks: [1, 2] },
  { id: 2, title: 'In Progess', tag: 'progress', tasks: [4, 5] },
  { id: 3, title: 'Completed', tag: 'completed', tasks: [0, 3] },
  { id: 4, title: 'Rejected', tag: 'rejected', tasks: [] },
];
