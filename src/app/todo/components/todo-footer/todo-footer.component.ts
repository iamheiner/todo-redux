import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterTodoItem, filterType } from '../../redux/filters.actions';
import { deleteCompletedTodoItem } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter:string;
  filters: filterType[] = ['all','complete','active'];
  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state=> {
       this.currentFilter = state.filter;
       this.pending = state.todo.filter(m=> !m.completed).length;
    });
  }

  setFilter (evt: string) {
      this.store.dispatch(filterTodoItem({filter: evt}));
  }

  removeCompleted() {
       this.store.dispatch(deleteCompletedTodoItem());
  }

}
