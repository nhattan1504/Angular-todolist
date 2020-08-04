import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FootertodoComponent} from '../app/components/footertodo/footertodo.component';
import {HeadertodoComponent} from '../app/components/headertodo/headertodo.component';
import {ListTodoComponent} from '../app/components/list-todo/list-todo.component';
import {ItemTodoComponent} from '../app/components/item-todo/item-todo.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FootertodoComponent,
        HeadertodoComponent,
        ListTodoComponent,
        ItemTodoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todomvc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todomvc');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('todomvc app is running!');
  });
});
