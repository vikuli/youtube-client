import { NgModule } from '@angular/core';
import { SearchItemsComponent } from './search-item/search-item.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'videos',
    component: SearchItemsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'videos/:id',
    component: VideoDescriptionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    SearchItemsComponent,
    VideoDescriptionComponent,
    AdminPageComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class YoutubeModule {}
