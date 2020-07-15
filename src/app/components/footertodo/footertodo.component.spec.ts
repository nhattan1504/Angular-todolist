import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertodoComponent } from './footertodo.component';

describe('FootertodoComponent', () => {
  let component: FootertodoComponent;
  let fixture: ComponentFixture<FootertodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootertodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
