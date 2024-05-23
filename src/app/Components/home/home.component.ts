import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todoList      : string    = "";
  toDoListLis   : string[]  = [];

  addToDo(){
    this.toDoListLis.push(this.todoList);
    this.todoList = ""
  }

}
