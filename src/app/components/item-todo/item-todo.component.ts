import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from 'src/app/models/todo.models';
import { trigger, state, style, transition, animate } from '@angular/animations';

const fadeStrikeThroughAnimation = trigger('fadeStrikeThrough', [
  state(
    'active',
    style({
      fontSize: '30px',
      color: 'black',
    }),
  ),
  state(
    'completed',
    style({
      fontSize: '25px',
      color: 'lightgrey',
      textDecoration: 'line-through',
    }),
  ),
  transition('active <=> completed', [animate(250)]),
]);
@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css'],
  animations: [fadeStrikeThroughAnimation],
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
