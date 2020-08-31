import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { Course } from 'src/models/Course';
import { Router } from '@angular/router';
import { MentorSkills } from 'src/models/MentorSkills';

@Component({
  selector: 'app-already-register',
  templateUrl: './already-register.component.html',
  styleUrls: ['./already-register.component.css']
})
export class AlreadyRegisterComponent implements OnInit {

  user_id: number;
  letter: String;
  course: Course[];
  course_nm: any;
  mentorSkills: MentorService[];
  registeredCourse: any;
  courseName: MentorService[];
  catchedCourseName: MentorService[];
  len: number;
  error: any;
  leng: number;
  constructor(public mentorService: MentorService, private router: Router) { }

  ngOnInit() {
    this.user_id = 2;

    this.mentorService.getRegisteredCourse(this.user_id).subscribe(response => {
      console.log(response),
        this.mentorSkills = response; this.len = response.length; this.mentorService.leng = this.len;
      console.log(this.mentorSkills);
      console.log(this.mentorService.leng);
    },
      error => {
        console.log(error);
        this.error = error;
        this.mentorService.errorStatusCheck(error.status);
      }
    );


    this.mentorService.findCourseName(this.user_id).subscribe(response => {
      this.courseName = response;
      let sample = this.courseName;

      this.catchedCourseName = this.courseName;
    },
      error => {
        console.log(error);
        this.error = error;
        this.mentorService.errorStatusCheck(error.status);
      }
    );

    this.mentorService.leng = this.len;
    console.log(this.mentorService.leng);

  }
  search(value: String) {
    this.mentorService.letter = value;
    console.log("in already registered component" + this.mentorService.letter);
    this.mentorService.findByCourse(value).subscribe(response => this.course = response);
    this.router.navigate(['/search']);
  }
  onDelete(s: MentorSkills) {
    console.log("in already registered component, in delete function");
    if (s.status != "completed") {
      alert(s.course_nm + " course is " + s.status + ". Please remove completed course");
      this.mentorService.getRegisteredCourse(this.user_id).subscribe(response => this.mentorSkills = response);
    }
    else {

      this.mentorService.deleteById(2, s.course_id).subscribe(response => console.log(response));
      console.log("course status = " + s.status);
      //this.router.navigate(['alreadyRegister']);
      this.mentorService.getRegisteredCourse(this.user_id).subscribe(response => this.mentorSkills = response);
    }
  }

  //   select(selectedName:any){
  //     let selectedCourse=this.courseName;
  //     this.catchedCourseName=selectedCourse;
  //     console.log(selectedName);
  // this.catchedCourseName = selectedCourse.filter((item)=>item.course_nm==selectedName);
  // this.router.navigate(['/search']);
  //   }







}
