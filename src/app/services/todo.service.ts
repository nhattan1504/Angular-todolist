import { Injectable } from '@angular/core';
import {Todo} from 'src/app/models/todo.models';
import { BehaviorSubject, Observable } from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
import {Fill, Filter} from '../models/filter.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private static readonly TodoStorageKey = 'todos';

  private todos:Todo[];
  private filteredTodos:Todo[];
  private lengthSubject: BehaviorSubject<number> =new BehaviorSubject<number>(0);
  private todoSubject: BehaviorSubject<Todo[]>=new BehaviorSubject<Todo[]>([]);
  private currentFilter= Fill.All;
  private displayTodoSubject: BehaviorSubject<Todo[]>= new BehaviorSubject<Todo[]>([]);

  todos$: Observable<Todo[]>=this.displayTodoSubject.asObservable();
  length$: Observable<number>=this.lengthSubject.asObservable();
  constructor(private storageService:LocalStorageService ) { };

  fetchDataLocalStorage(){
    this.todos=this.storageService.getValue(TodoService.TodoStorageKey) || [];
    this.filteredTodos=[...this.todos];
    this.updateTodosData();
  }
  updateLocalStorage(){
    this.storageService.setObject(TodoService.TodoStorageKey,this.todos);
    this.filterTodos(this.currentFilter, false);
    this.updateTodosData();
  }
  addTodo(content:string){
    const date= new Date(Date.now()).getTime();
    const newDoto= new Todo(date,content);
    this.todos.unshift(newDoto);
    this.updateLocalStorage();
  }
  changeTodoStatus(id: number, isCompleted: boolean) {
    const index = this.todos.findIndex(t => t.id === id);
    const todo = this.todos[index];
    todo.isDone = isCompleted;
    this.todos.splice(index, 1, todo);
    this.updateLocalStorage();
  }

  toggleAll(){
    this.todos=this.todos.map(todo=>{
      return {
        ...todo,
        isDone:!this.todos.every(t=>t.isDone)
      };
    })
    this.updateLocalStorage();
  }

  editTodo(id: number, content: string) {
    const index = this.todos.findIndex(t => t.id === id);
    const todo = this.todos[index];
    todo.content = content;
    this.todos.splice(index, 1, todo);
    this.updateLocalStorage();
  }
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.isDone);
    this.updateLocalStorage();
  }
  deleteTodo(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos.splice(index, 1);
    this.updateLocalStorage();
  }

  filterTodos(filter: Fill, isFiltering: boolean = true) {
    this.currentFilter = filter;
    switch (filter) {
      case Fill.Active:
        this.filteredTodos = this.todos.filter(todo => !todo.isDone);
        break;
      case Fill.Done:
        this.filteredTodos = this.todos.filter(todo => todo.isDone);
        break;
      case Fill.All:
        this.filteredTodos = [...this.todos];
        break;
    }

    if (isFiltering) {
      this.updateTodosData();
    }
  }

  private updateTodosData() {
    this.displayTodoSubject.next(this.filteredTodos);
    this.lengthSubject.next(this.todos.length);
  }

}
