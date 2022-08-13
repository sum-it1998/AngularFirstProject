import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/download (2).jpg'},
    {'id':2,'name':'Learn TypeScript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/download (1).jpg'},
    {'id':3,'name':'Learn NodeJs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/download (4).jpg'},
    {'id':4,'name':'Learn Javascript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/download (5).jpg'},

  ]

}
