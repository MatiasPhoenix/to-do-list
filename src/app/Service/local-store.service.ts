import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  saveToDoList(key:string,value:any[]):void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getToDoList(key:string):any {
    const arrayString = localStorage.getItem(key);
    return arrayString ? JSON.parse(arrayString) : [];
  }

  removeToDoItem(key: string, text: string): void {
    let toDoList = this.getToDoList(key);
    toDoList = toDoList.filter((item: { text: string; }) => item.text !== text);
    this.saveToDoList(key, toDoList);
  }
  clear():void{
    localStorage.clear();
  }
}
