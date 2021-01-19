import { ITask } from "./task.model";

export interface ITaskList{
  id: number
  title: string
  tag : string
  tasks : ITask[]

}