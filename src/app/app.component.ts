import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    </div>
    <h2>{{currentFocus}}</h2>
    <ul>
      <li [class]="priorityColor(task)" (click)="isDone(task)" *ngFor="let task of tasks">
        {{task.description}}
        <button (click)='editTask()'>Edit</button>
      </li>
    </ul>
  </div>
  `
})
export class AppComponent {
  currentFocus: string = 'Angular homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework'),
    new Task('Begin brainstorming possible JS group projects'),
    new Task('And README file to last few Angular repos on GitHub')
  ];
  editTask(){
    alert("You just requested to edit a Task!");
  }

  isDone(clickedTask: Task){
    if(clickedTask.done === true) {
      alert('This task is done');
    } else {
      alert('This task is not done. Better get to work');
    }
  }

  priorityColor(task){
    if(task.priority === 3) {
      return "bg-danger";
    } else if (task.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
}

export class Task{
  public done: boolean = false;
  constructor(public description: string){}
}
