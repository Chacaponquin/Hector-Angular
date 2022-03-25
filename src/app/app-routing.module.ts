import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
