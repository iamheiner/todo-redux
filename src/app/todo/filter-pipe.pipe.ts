import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  Todo
} from './models/todo.models';
import {
  filterType
} from './redux/filters.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], args: filterType): Todo[] {
    switch (args) {
      case 'complete':
         return value.filter(m=> m.completed);
      case 'active':
        return value.filter(m=> !m.completed);
      default:
        return value
    }
  }

}
