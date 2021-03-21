import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list: Todo[] = [];
  currentFilter: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ todo, filter})=> {
      this.list = todo;
      this.currentFilter = filter;
    });
  }

}
