import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./youtube/youtube.module').then((mod) => mod.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (mod) => mod.AuthorizationModule
      ),
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
