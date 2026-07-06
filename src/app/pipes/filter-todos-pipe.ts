import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todosVal: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todosVal;
    }
    const text = searchTerm.toLowerCase();

    return todosVal.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
