import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error:any;

  constructor(public mentorService: MentorService) { }

  ngOnInit() {
   
  }

}
