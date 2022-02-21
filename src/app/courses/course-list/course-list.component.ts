import {Component, OnInit} from '@angular/core';
import {Course} from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [
    new Course('Angular', 'Muhammad Aftab', 'Frontend'),
    new Course('Node', 'Maximilian', 'Backend'),
    new Course('Photoshop', 'Noah', 'Graphic Designing'),
    new Course('Dot Net', 'Oliver', 'Backend Framework'),
    new Course('React', 'Elijah', 'Frontend'),
    new Course('C Sharp', 'James', 'Backend'),
    new Course('Express', 'Jayden', 'Backend JS'),
    new Course('Java', 'Lucas', 'Backend'),
  ];


  constructor() {
  }

  ngOnInit(): void {

  }

}
