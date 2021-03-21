import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../../models/todo.models';
import { deleteTodoItem, editTodoItem, toggleCompleteTodoItem } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('editHtml') editHtml: ElementRef;
  checkControl: FormControl;
  editControl: FormControl;

  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkControl = new FormControl(this.todo.completed);
    this.editControl = new FormControl(this.todo.text, Validators.required);

    this.checkControl.valueChanges.subscribe(m => {
       this.store.dispatch(toggleCompleteTodoItem({id: this.todo.id}));
    });
  }

  edit() {
    this.editing = !this.editing;
    if (this.editing) {
        setTimeout(() => {
          this.editHtml.nativeElement.select();
        }, 1);
        this.editControl.setValue(this.todo.text);
    } else {
      if (this.editControl.valid && this.todo.text != this.editControl.value) {
        this.store.dispatch(editTodoItem({id: this.todo.id, text: this.editControl.value}));
      }
    }
  }

  remove() {
      this.store.dispatch(deleteTodoItem({id: this.todo.id }));
  }

}
