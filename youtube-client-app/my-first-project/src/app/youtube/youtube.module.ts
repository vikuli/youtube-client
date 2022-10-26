import { NgModule } from '@angular/core';
import { SearchItemsComponent } from './search-item/search-item.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: SearchItemsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: VideoDescriptionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [SearchItemsComponent, VideoDescriptionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeModule {}
