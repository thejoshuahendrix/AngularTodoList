import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/Task';
import { TasklistService } from 'src/app/services/tasklist.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasklistService: TasklistService) { }

  ngOnInit(): void {
    this.tasklistService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.tasklistService.deleteTask(task).subscribe((tasks) => (this.tasks = this.tasks.filter(t=> t.id !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasklistService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.tasklistService.addTask(task).subscribe((task)=> this.tasks.push(task));
  }
}
