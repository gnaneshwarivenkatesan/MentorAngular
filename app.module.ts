import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { HeaderComponent } from './header/header.component';
import { MentorService } from './mentor.service';
import { HttpClientModule } from '@angular/common/http';
import { AlreadyRegisterComponent } from './already-register/already-register.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseViewComponent,
    HeaderComponent,
    AlreadyRegisterComponent,
    SearchComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    RouterModule.forRoot([
      { path: 'alreadyRegister', component: AlreadyRegisterComponent },
      { path: 'mentorHome', component: CourseViewComponent },
      { path: 'search', component: SearchComponent },
      { path: 'delete', component: AlreadyRegisterComponent },
      { path: 'getCourseName', component: AlreadyRegisterComponent },
      { path: 'error', component: ErrorComponent }

    ])
  ],

  providers: [MentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
