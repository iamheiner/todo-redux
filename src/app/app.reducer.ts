import { ActionReducerMap } from "@ngrx/store";
import {
  Todo
} from "./todo/models/todo.models";
import { filterReducer } from "./todo/redux/filters.reducers";
import { todoReducer } from "./todo/redux/todo.reducers";

export interface AppState {
  todo: Todo[],
  filter: string
}

export const appReducerMap: ActionReducerMap<AppState> = {
  todo: todoReducer,
  filter: filterReducer
}
