import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
