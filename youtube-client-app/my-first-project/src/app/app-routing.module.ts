import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './youtube/error/error.component';
import { VideoDescriptionComponent } from './youtube/video-description/video-description.component';
import { SearchItemsComponent } from './youtube/search-item/search-item.component';

const routes: Routes = [
  //{path: '', component: SearchResultsComponent},
  { path: 'videos', component: SearchItemsComponent },
  { path: 'videos/:id', component: VideoDescriptionComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
