import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MentorService {


  private baseUrl = 'http://localhost:9040';

  public mntr_id: number;
  public user_id: number;
  public letter: String;
  public course_id: number;
  public course_nm: String;
  public course_desc: String;
  public user_nm: String;
  public status: String;
  public leng: number;
  public errorMessage: any;
  constructor(private http: HttpClient, private router: Router) {

  }
  getCourseDetails(mntr_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/training` + `/${mntr_id}`);
  }
  getRegisteredCourse(user_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/course` + `/${user_id}`);
  }


  findByCourse(letter: String): Observable<any> {
    console.log(this.letter);
    return this.http.get(`${this.baseUrl}` + `/search` + `/${this.letter}`);
  }

  deleteById(user_id: number, course_id: number): Observable<Object> {
    console.log("in mentor service deletebyid func");
    console.log("mentorsevice" + user_id + " " + course_id);
    console.log(`${this.baseUrl}` + `/delete/` + user_id + `/` + course_id);
    return this.http.get(`${this.baseUrl}` + `/delete/` + user_id + `/` + course_id);

  }

  register(mntr: Object): Observable<Object> {
    console.log("in register method");
    return this.http.post(`${this.baseUrl}` + `/register`, mntr);
  }

  findCourseName(user_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getCourseName/` + user_id);
  }

  errorStatusCheck(errorStatus: any) {

    if (errorStatus == 0) {
      this.errorMessage = "Connection Refused";

    }
    else if (errorStatus == 500) {
      this.errorMessage = "Server side Error";

    }
    else if (errorStatus == 400) {
      this.errorMessage = "pageNotFound";

    }

    this.router.navigate(['/error']);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
 
      .pipe(
 
        retry(1),
 
        catchError((error: HttpErrorResponse) => {
 
          let errorMessage = '';
 
          if (error.error instanceof ErrorEvent) {
 
            // client-side error
 
            errorMessage = `Error: ${error.error.message}`;
 
          } else {
 
            // server-side error
 
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
          }
 
          window.alert(errorMessage);
 
          return throwError(errorMessage);
 
        })

      )
 
  }
 
}
