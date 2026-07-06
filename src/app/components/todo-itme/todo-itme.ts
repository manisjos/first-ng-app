import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo],
  templateUrl: './todo-itme.html',
  styleUrl: './todo-itme.css',
})
export class TodoItme {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
