import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { addTodoItem } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  addControl: FormControl;

  constructor(private store: Store<AppState>) {
    this.addControl = new FormControl('',Validators.required);
  }

  ngOnInit(): void {
  }

  add() {
    if(this.addControl.invalid) { return; }
    this.store.dispatch(addTodoItem({text: this.addControl.value}));
    this.addControl.reset();
  }

}
