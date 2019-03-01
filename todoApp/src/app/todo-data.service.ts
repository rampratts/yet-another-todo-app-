import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from "./models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor() { }
  todosData = [
    {
      id: 1,
      title: "Todo one",
      completed: false
    },
    {
      id: 2,
      title: "Todo two",
      completed: true
    },
    {
      id: 3,
      title: "Todo two",
      completed: false
    }
  ];

  getTodos() {
    return this.todosData;
  }

}
