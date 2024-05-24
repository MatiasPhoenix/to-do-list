import { LocalStoreService } from '../../Service/local-store.service';
import { Component } from '@angular/core';

interface ToDoList {text : string;}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor (private localStoreService: LocalStoreService){}

  toDoItem     : string      = "";
  toDoList     : ToDoList[]  = [];

  ngOnInit(){
    this.toDoList = this.localStoreService.getToDoList('todos');
  }

  addToDo(){
    if (this.toDoItem.trim()) {
      const newToDo: ToDoList = { text: this.toDoItem };
      this.toDoList.push(newToDo);
      this.localStoreService.saveToDoList('todos', this.toDoList);
      this.toDoItem = '';
    }
  }
  removeToDo(todo: string){
    this.localStoreService.removeToDoItem('todos', todo);
    this.toDoList = this.localStoreService.getToDoList('todos')
  }

}
