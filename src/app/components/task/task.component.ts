import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() id! : number;
  task$! : Observable<ITask>;

  constructor(private taskService : TaskService){
  }

  ngOnInit(): void {
    this.task$ = this.taskService.getTask(this.id);
  }


}
