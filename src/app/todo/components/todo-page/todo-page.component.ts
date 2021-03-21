import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { completeAllTodoItem } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  checkboxComplete: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkboxComplete = new FormControl();
    this.checkboxComplete.valueChanges.subscribe(m => {
      this.store.dispatch(completeAllTodoItem({complete: m}));
    })
  }

}
