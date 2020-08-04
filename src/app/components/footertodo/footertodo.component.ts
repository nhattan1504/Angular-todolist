import { Component, OnInit } from '@angular/core';
import {Filter, Fill} from 'src/app/models/filter.model';
import {TodoService} from 'src/app/services/todo.service';
import { Observable, Subject } from 'rxjs';
import { map,takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-footertodo',
  templateUrl: './footertodo.component.html',
  styleUrls: ['./footertodo.component.css']
})
export class FootertodoComponent implements OnInit {
  filterButton:Filter[]=[
    {type:Fill.All,label:'All',isActive:true},
    {type:Fill.Active,label:'Active',isActive:false},
    {type:Fill.Done,label:'Done',isActive:false}
  ];
  length=0;
  hasCompleted: Observable<boolean>;
  destroyed: Subject<null>=new Subject<null>();
  constructor(private todoService:TodoService) { }
  ngOnInit() {
    this.hasCompleted = this.todoService.todos$.pipe(
      map(todos => todos.some(t => t.isDone)),
      takeUntil(this.destroyed),
    );

    this.todoService.length$.pipe(takeUntil(this.destroyed)).subscribe(length => {
      this.length = length;
    });
  }

  filter(type: Fill) {
    this.setActiveFilterBtn(type);
    this.todoService.filterTodos(type)
  }

  private setActiveFilterBtn(type: Fill) {
    this.filterButton.forEach(btn => {
      btn.isActive = btn.type === type;
    });
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
