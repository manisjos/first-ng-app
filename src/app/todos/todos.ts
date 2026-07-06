import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItme } from '../components/todo-itme/todo-itme';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItme,FormsModule,FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');
  ngOnInit(): void {
    console.log('In here!');
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  }
}
