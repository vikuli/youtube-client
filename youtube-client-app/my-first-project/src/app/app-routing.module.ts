import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./youtube/youtube.module').then((mod) => mod.YoutubeModule),
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
