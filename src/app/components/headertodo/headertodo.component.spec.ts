import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertodoComponent } from './headertodo.component';

describe('HeadertodoComponent', () => {
  let component: HeadertodoComponent;
  let fixture: ComponentFixture<HeadertodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadertodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
