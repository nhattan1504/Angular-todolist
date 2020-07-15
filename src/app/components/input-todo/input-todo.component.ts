import { Component, OnInit } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {
  todoContent='';
  constructor(private todoService:TodoService) {
   }

  ngOnInit(){
  }
  addTodo(){
    if(this.todoContent.trim()===""){
      return false;
    }
    this.todoService.addTodo(this.todoContent);
    this.todoContent='';
  }


}
