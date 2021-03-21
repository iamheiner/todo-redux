import { createAction, props } from '@ngrx/store';

export type filterType = 'all' | 'complete' | 'active';

export const filterTodoItem = createAction('[Filter] Set filter', props<{ filter: string}>());
