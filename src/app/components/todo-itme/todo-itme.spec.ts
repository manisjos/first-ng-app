import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItme } from './todo-itme';

describe('TodoItme', () => {
  let component: TodoItme;
  let fixture: ComponentFixture<TodoItme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItme],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
