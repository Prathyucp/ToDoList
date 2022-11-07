import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from 'src/app/model/to-do-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
    if(this.myToDos.length==0)
    this.listEmpty = true;
    else{
      let notCompletedList: ToDoItem[];
      notCompletedList = this.myToDos.filter(p => !p.completed);
      if(notCompletedList.length==0)
      this.listEmpty = true;
    }
   }
  
  title:string="To-Do List";
  message:string="Congratualtions! You have completed all tasks.";
  searchTerm:string="";
  @Input() myToDos:ToDoItem[] =[{

  }]as ToDoItem[];
  @Output() filterToDOs = new EventEmitter<string>;
  ngOnInit(): void {
    
  }
  newToDO:ToDoItem = {} as ToDoItem;
  listEmpty:boolean=false;
  subtitle:string="A place to store your to-dos"
  
  addToDo(newToDo:ToDoItem){
    let length = 0;
    length = this.myToDos.length;
    newToDo.index=length+1;
    this.myToDos.push(newToDo);
    this.evaluate();
  }
  completeToDo(compToDO:ToDoItem){
  
      let index:number = this.myToDos.findIndex(c => (c.task == compToDO.task) );
      this.myToDos[index].completed=true;
      this.evaluate();
  }
  removeToDo(compToDO:ToDoItem){
  
    let index:number = this.myToDos.findIndex(c => (c.task == compToDO.task) );
    this.myToDos.splice(index,1);
    this.evaluate();
  
  }
  editToDo(compToDO:ToDoItem){
  
    let id:number = this.myToDos.findIndex(c => (c.index == compToDO.index) );
    
    this.myToDos[id].editable = !this.myToDos[id].editable;
    
  }
  UpdateToDo(compToDO:ToDoItem){
  
    let id:number = this.myToDos.findIndex(c => (c.index == compToDO.index) );
    this.myToDos[id].editable = !this.myToDos[id].editable;
    this.myToDos[id].task = compToDO.task;
  }
  evaluate(){
    if(this.myToDos.length==0)
    this.listEmpty = true;
    else{
      let notCompletedList: ToDoItem[];
      notCompletedList = this.myToDos.filter(p => !p.completed);
      if(notCompletedList.length==0)
      this.listEmpty = true;
    }
  }
  filterDataByTag(searchWord:string):void{
    this.filterToDOs.emit(searchWord);
  }
  
  
}
