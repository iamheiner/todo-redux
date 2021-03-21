import { createReducer, on } from '@ngrx/store';
import { filterTodoItem } from './filters.actions';

export const initialState = 'all';

const _filterReducer = createReducer(
  initialState,
  on(filterTodoItem, (state, { filter }) => filter),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
