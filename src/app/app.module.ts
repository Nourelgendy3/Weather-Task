import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondDisplayComponent } from './second-display/second-display.component';
import { ThirdDisplayComponent } from './third-display/third-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondDisplayComponent,
    ThirdDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
