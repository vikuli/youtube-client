import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { LoginComponent } from './authorization/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    YoutubeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
