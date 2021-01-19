import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  getTasks(tag : string): ITask[] {
    return TASKS.filter((task) => {
      return task.status === tag
    })
  }
}

const TASKS: ITask[] = [
  {
    id: 0,
    title: 'Grab Bread',
    description: 'Pull 2 slices of bread out of draw',
    status: 'completed',
  },
  {
    id: 1,
    title: 'Grab Peanut Butter',
    description: 'Preferably Black Cat',
    status: 'review',
  },
  {
    id: 2,
    title: 'Grab Jam',
    description: 'Strawberry or nothing!',
    status: 'review',
  },
  {
    id: 3,
    title: 'Grab Knife',
    description: 'A butterknife will do',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Apply Peanut Butter to Bread',
    description: 'Spread corner to corner',
    status: 'progress',
  },
  {
    id: 5,
    title: 'Apply Jam to Bread',
    description: 'Spread corner to corner',
    status: 'progress',
  },
  {
    id: 6,
    title: 'Put pieces of bread together',
    description: 'Watch for spillage',
    status: 'todo',
  },
  {
    id: 7,
    title: 'Cut diagonally',
    description: 'Who even cuts into squares?',
    status: 'todo',
  },
  {
    id: 8,
    title: 'Eat sandwich',
    description: 'Yum!',
    status: 'todo',
  },
];
