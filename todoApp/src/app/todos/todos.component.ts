import { Component, OnInit } from '@angular/core';
import { TodoDataService } from "../todo-data.service";

import { Todo } from "../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [];

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
