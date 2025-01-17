import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';

@NgModule({
  declarations: [TodoComponent, TodoEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  providers: [TodoService, TodoResolver],
})
export class TodoModule { }
