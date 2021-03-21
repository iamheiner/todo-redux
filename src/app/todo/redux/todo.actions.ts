import { createAction, props } from '@ngrx/store';

export const addTodoItem = createAction('[Add] Todo Item', props<{text: string}>());
export const toggleCompleteTodoItem = createAction('[Toggle Complete] Todo Item', props<{id: number}>());
export const completeAllTodoItem = createAction('[Complete All] Todo Item',props<{complete: boolean}>());
export const editTodoItem = createAction('[Edit] Todo Item', props<{id: number, text: string}>());
export const deleteTodoItem = createAction('[Delete] Todo Item', props<{id: number}>());
export const deleteCompletedTodoItem = createAction('[Delete Completed] Todo Item');
