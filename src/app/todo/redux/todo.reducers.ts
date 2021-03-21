import {
  createReducer,
  on
} from '@ngrx/store';
import {
  Todo
} from '../models/todo.models';
import {
  addTodoItem,
  completeAllTodoItem,
  deleteCompletedTodoItem,
  deleteTodoItem,
  editTodoItem,
  toggleCompleteTodoItem
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Example 1'),
  new Todo('Example 2')
];

const _todoReducer = createReducer(
  initialState,
  on(addTodoItem, (state, {
    text
  }) => [...state, new Todo(text)]),
  on(toggleCompleteTodoItem, (state, {
    id
  }) => {
    return state.map(m => {
      if (m.id === id) {
        return {
          ...m,
          completed: !m.completed
        }
      } else {
        return m;
      }
    });
  }),
  on(completeAllTodoItem, (state, {
    complete
  }) => state.map(m => {
    return {
      ...m,
      completed: complete
    }
  })),
  on(editTodoItem, (state, {
    id,
    text
  }) => {
    return state.map(m => {
      if (m.id === id) {
        return {
          ...m,
          text: text
        }
      } else {
        return m;
      }
    });
  }),
  on(deleteTodoItem, (state, {
    id
  }) => state.filter(m => m.id != id)),

  on(deleteCompletedTodoItem, (state) => state.filter(m => !m.completed))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
