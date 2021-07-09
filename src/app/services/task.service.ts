import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-taska';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const Tasks = of(TASKS);
    return Tasks;
  }
}
