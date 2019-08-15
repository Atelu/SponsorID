import { SponsorService } from './sponsor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import {
  MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor, ContentType, Accept } from './httpinterceptor';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    SponsorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatCheckboxModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, BrowserAnimationsModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, FormsModule, ReactiveFormsModule, LoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentType,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Accept,
      multi: true
    },
    SponsorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
