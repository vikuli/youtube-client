import { NgModule } from '@angular/core';
import { SearchItemsComponent } from './search-item/search-item.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';
import { ErrorComponent } from './error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { VideoDescriptionService } from './services/video-description.service';

@NgModule({
  declarations: [
    SearchItemsComponent,
    VideoDescriptionComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [SearchItemsComponent, VideoDescriptionComponent, ErrorComponent],
  providers: [VideoDescriptionService],
})
export class YoutubeModule {}
