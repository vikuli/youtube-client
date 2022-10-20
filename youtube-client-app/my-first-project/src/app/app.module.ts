import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemsComponent } from './search/search-item/search-item.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ErrorComponent } from './error/error.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemsComponent,
    AuthorizationComponent,
    ErrorComponent,
    VideoDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
