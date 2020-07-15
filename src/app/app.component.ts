import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasTodo$: Observable<boolean>;
  constructor(private todoService:TodoService)
  {}

  title = 'todomvc';
  ngOnInit(){
    this.todoService.fetchDataLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
  }
}
