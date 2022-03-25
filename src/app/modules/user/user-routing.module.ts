import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSelectedComponent } from './components/user-selected/user-selected.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: ':id',
    component: UserSelectedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
