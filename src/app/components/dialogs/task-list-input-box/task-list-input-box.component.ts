import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskListData } from 'src/app/models/task-data.model';


@Component({
  selector: 'app-task-list-input-box',
  templateUrl: './task-list-input-box.component.html',
  styleUrls: ['./task-list-input-box.component.css']
})
export class TaskListInputBoxComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskListInputBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskListData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
