import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from './calendar.component';
import { DateService } from './date.service';
import { AppComponent }   from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CalendarComponent],
    bootstrap: [AppComponent],
    providers: [DateService]
})
export class AppModule { }
