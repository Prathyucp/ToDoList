import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ToDoItem } from 'src/app/model/to-do-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addedToDO = new EventEmitter<ToDoItem>;
  
  newToDO:ToDoItem = {} as ToDoItem;
  constructor() { }
  defaultValue:string="Add your To-do";
  
  ngOnInit(): void {
  }
  addToDoItem(newToDo:ToDoItem):void{
    
    let result:ToDoItem = { ...this.newToDO };
    this.addedToDO.emit(result);
    this.newToDO = {} as ToDoItem;
  
  }

}


