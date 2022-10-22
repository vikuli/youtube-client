import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';

const routes: Routes = [
  //{path: '', component: SearchResultsComponent},
  {path: 'videos', component: SearchResultsComponent},
  {path: 'videos/:id', component: VideoDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
