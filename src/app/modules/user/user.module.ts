import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import userComponents from './components/index';

@NgModule({
  declarations: [...userComponents],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
