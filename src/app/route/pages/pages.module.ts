import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PagesModule { }
