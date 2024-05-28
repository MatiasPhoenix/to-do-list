import { url } from 'inspector';
import { LocalStoreService } from '../../Service/local-store.service';
import { Component } from '@angular/core';

interface ToDoList {
  text    : string,
  postIt  : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor (private localStoreService: LocalStoreService){}

  toDoItem     : string      = "";
  postIt       : number[]    = [0,1,2,3];
  toDoList     : ToDoList[]  = [];


  ngOnInit(){
    this.toDoList = this.localStoreService.getToDoList('todos');

  }

  postItMetod(){
    let numPostIt: number = Math.floor(Math.random() * 4) + 1;
    switch (numPostIt) {
      case 1:
      return 'url("../../../assets/post-it-01.png")';

      case 2:
      return 'url("../../../assets/post-it-02.png")';

      case 3:
      return 'url("../../../assets/post-it-03.png")';

      case 4:
      return 'url("../../../assets/post-it-04.png")';

      default:
        console.log('non ci sono immagini');
        return ''

    }

  }

  addToDo(){
    let newPostIt = this.postItMetod();
    console.log(newPostIt);

    if (this.toDoItem.trim()) {
      const newToDo: ToDoList = {
        text: this.toDoItem,
        postIt: newPostIt
      };
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
