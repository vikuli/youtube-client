import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
