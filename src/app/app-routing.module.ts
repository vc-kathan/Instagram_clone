import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    // canActivate: [SignInGuard],
    loadChildren: () => import('./route/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'user',
    // canActivate: [SignOutGuard],
    component: LayoutComponent,
    loadChildren: () => import('./route/pages/pages.module').then(m => m.PagesModule)
  },
  { path: '**', redirectTo: "auth" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
