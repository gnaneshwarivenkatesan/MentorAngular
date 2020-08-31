import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { Trainings } from 'src/models/Trainings';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  mntr_id: number;
  status: String;
  training: Trainings[];
  filterTraining: Trainings[];
  filter: Trainings[];
  error: any;
  router: any;
  errorMsg: any;
  len: number;
  leng: number;
  constructor(public mentorService: MentorService) {

  }
  ngOnInit() {
    this.mntr_id = 2;

    this.mentorService.getCourseDetails(this.mntr_id).subscribe(response => { this.training = response; this.filterTraining = this.training ;this.len = response.length; this.mentorService.leng = this.len;
     
      console.log(this.mentorService.leng);},
      error => {
        console.log(error);
        this.error = error;
        this.mentorService.errorStatusCheck(error.status);
      }
    );

  }

  filterCourse(filterVal: any) {
    let filter = this.training;
    this.filterTraining = filter;

    if (filterVal == "all") {

      this.filterTraining = filter;

    }
    else {

      this.filterTraining = filter.filter((item) => item.status == filterVal);

    }
  }


}

