import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from 'src/app/models/todo.models';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered = false;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }
  submitEdit(event: KeyboardEvent) {
    const { keyCode } = event;
    event.preventDefault(); // Prevent Form to submit by default
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  changeTodoStatus() {
    this.changeStatus.emit({ ...this.todo, isDone: !this.todo.isDone });
  }

  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }
}
