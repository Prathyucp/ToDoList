import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from 'src/app/model/to-do-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() myToDo:ToDoItem = {} as ToDoItem;
  
  @Output() remove = new EventEmitter<ToDoItem>();
  @Output() complete = new EventEmitter<ToDoItem>();
  @Output() edit = new EventEmitter<ToDoItem>();
  @Output() update = new EventEmitter<ToDoItem>();
  editedText:string="";
  constructor() { }
  
  ngOnInit(): void {
  }
  
  removeToDO(shouldRemoveToDo:ToDoItem):void{
    this.remove.emit(shouldRemoveToDo);
  }
  completeToDo(shouldCompleteToDO:ToDoItem):void{
    this.complete.emit(shouldCompleteToDO);
  }
  editToDo(editToDO:ToDoItem):void{
    this.edit.emit(editToDO);
  }
  updateToDo(editToDO:ToDoItem):void{
    this.update.emit(editToDO);
  }
}
