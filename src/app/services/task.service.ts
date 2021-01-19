import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): ITask[] {
    return TASKS;
  }
}

const TASKS: ITask[] = [
  {
    id: 0,
    title: 'Grab Bread',
    description: 'Pull 2 slices of bread out of draw',
    status: 'todo',
  },
  {
    id: 1,
    title: 'Grab Peanut Butter',
    description: 'Preferably Black Cat',
    status: 'todo',
  },
  {
    id: 2,
    title: 'Grab Jam',
    description: 'Strawberry or nothing!',
    status: 'todo',
  },
  {
    id: 3,
    title: 'Grab Knife',
    description: 'A butterknife will do',
    status: 'progress',
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
    status: 'review',
  },
  {
    id: 6,
    title: 'Put pieces of bread together',
    description: 'Watch for spillage',
    status: 'review',
  },
  {
    id: 7,
    title: 'Cut diagonally',
    description: 'Who even cuts into squares?',
    status: 'review',
  },
  { id: 8, 
    title: 'Eat sandwich', 
    description: 'Yum!', 
    status: 'completed' },
];
