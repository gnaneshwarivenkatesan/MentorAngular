import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';
import { MentorService } from '../mentor.service';
import { MentorSkills } from 'src/models/MentorSkills';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  letter: String;
  course_id: number;
  course_nm: String;
  course_desc: String;
  user_id: number;
  user_nm: String;
  status: String;
  skill_id: number;
  is_active: String;
  course: Course[];
  courseName: MentorService[];
  catchedCourseName: MentorService[];
  leng: number;
  error: any;
  constructor(public mentorService: MentorService) { }

  ngOnInit() {
    this.user_id = 2;

    this.letter = this.mentorService.letter;
    console.log(this.letter);
    this.mentorService.findByCourse(null).subscribe(response => this.course = response,
      error => {
        console.log(error);
        this.error = error;
        this.mentorService.errorStatusCheck(error.status);
      });
    this.mentorService.findCourseName(this.user_id).subscribe(response => { this.courseName = response; this.catchedCourseName = this.courseName },
      error => {
        console.log(error);
        this.error = error;
        this.mentorService.errorStatusCheck(error.status);
      });

    console.log(this.mentorService.leng);

  }
  search(value: String) {
    this.mentorService.letter = value;
    console.log("in search component" + this.mentorService.letter);
    this.mentorService.findByCourse(value).subscribe(response => this.course = response);

  }
  register(index: MentorSkills) {
    this.user_id = 2;
    this.user_nm = 'gnana';
    this.status = "yetToStart";
    this.is_active = "active";
    if (this.mentorService.leng < 4) {
      console.log("in register" + index.course_nm);
      let mentorSkills = new MentorSkills(index.course_id, index.course_nm, this.status, this.user_id, this.user_nm, index.course_desc, this.is_active);

      this.mentorService.register(mentorSkills).subscribe(response => console.log(response));
      alert("Successfully Registered for " + index.course_nm + " course");
    }
    else {
      alert("Already you have registered for four courses, Kindly remove a completed course");
    }
  }
}
