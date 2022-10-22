import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';

const routes: Routes = [
  //{path: '', component: SearchResultsComponent},
  {path: 'videos', component: SearchResultsComponent},
  {path: 'videos/:id', component: VideoDescriptionComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
