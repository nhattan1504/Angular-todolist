import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadertodoComponent } from './components/headertodo/headertodo.component';
import { FootertodoComponent } from './components/footertodo/footertodo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { ItemTodoComponent } from './components/item-todo/item-todo.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeadertodoComponent,
    FootertodoComponent,
    ListTodoComponent,
    ItemTodoComponent,
    InputTodoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
