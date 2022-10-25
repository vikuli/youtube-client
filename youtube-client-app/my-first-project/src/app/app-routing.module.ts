import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './youtube/error/error.component';
import { VideoDescriptionComponent } from './youtube/video-description/video-description.component';
import { SearchItemsComponent } from './youtube/search-item/search-item.component';
import { LoginComponent } from './authorization/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: SearchItemsComponent, canActivate: [AuthGuard] },
  { path: 'videos', component: SearchItemsComponent, canActivate: [AuthGuard] },
  {
    path: 'videos/:id',
    component: VideoDescriptionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'authorization', component: LoginComponent },
  { path: 'error', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
