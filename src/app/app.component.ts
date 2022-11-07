import { Component } from '@angular/core';
import { ToDoItem } from './model/to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  
  myToDoList:ToDoItem[]=[
    {
      task:"Fold Clothes",
      completed:false,
      delete:false,
      index:1,
      editable:false
    },
    {
      task:"Prepare Dinner",
      completed:false,
      delete:false,
      index:2,
      editable:false
    },
    {
      task:"Pick up Kids",
      completed:false,
      delete:false,
      index:3,
      editable:false
    }
  ];

  filterDataByTag(searchTerm:string):void {
    
    
    this.myToDoList =   this.myToDoList.filter((el) => el.task.toLowerCase().includes(searchTerm.toLowerCase()));
    
    
  }
  
  
}
