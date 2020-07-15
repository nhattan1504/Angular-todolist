import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-headertodo',
  templateUrl: './headertodo.component.html',
  styleUrls: ['./headertodo.component.css']
})
export class HeadertodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  toggleAll(){
    this.todoService.toggleAll();

  }

}
