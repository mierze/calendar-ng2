import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from './calendar/calendar.component';
import { DateService } from './calendar/date.service';
import { EventService } from './calendar/event.service';
import { AppComponent }   from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CalendarComponent],
    bootstrap: [AppComponent],
    providers: [DateService, EventService]
})
export class AppModule { }
