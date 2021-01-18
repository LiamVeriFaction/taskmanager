import { Injectable } from '@angular/core';
import { ITask } from '../modules/task/task.module';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
getTasks(): ITask[]{
  return TASKS;
}

}

const TASKS: ITask[] = [
  { id: 1, title: 'Grab Bread', description: 'Pull 2 slices of bread out of draw' },
  { id: 2, title: 'Grab Peanut Butter', description: 'Preferably Black Cat' },
  { id: 3, title: 'Grab Jam', description: 'Strawberry or nothing!' },
  { id: 4, title: 'Grab Knife', description: 'A butterknife will do' },
  { id: 5, title: 'Apply Peanut Butter to Bread', description: 'Spread corner to corner' },
  { id: 6, title: 'Apply Jam to Bread', description: 'Spread corner to corner' },
  { id: 7, title: 'Put pieces of bread together', description: 'Watch for spillage' },
  { id: 8, title: 'Cut diagonally', description: 'Who even cuts into squares?' },
  { id: 9, title: 'Eat sandwich', description: 'Yum!' }
];
