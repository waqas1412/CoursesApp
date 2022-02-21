import {Component, OnInit} from '@angular/core';
import {Course} from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [new Course('Angular', 'Muhammad Aftab', 'Frontend'),
    new Course('Node', 'Maximilian', 'Backend'),
    new Course('Javascript', 'Unknown', 'Blah Blah'),
  ];


  constructor() {
  }

  ngOnInit(): void {

  }

}
