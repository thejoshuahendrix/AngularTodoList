import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  @Input() task!: Task;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task) {
    this.onToggleReminder.emit(task);
  }
}
