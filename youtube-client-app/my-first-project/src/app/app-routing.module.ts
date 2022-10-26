import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './youtube/error/error.component';
import { SearchItemsComponent } from './youtube/search-item/search-item.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchItemsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./youtube/youtube.module').then((mod) => mod.YoutubeModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (mod) => mod.AuthorizationModule,
      ),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
