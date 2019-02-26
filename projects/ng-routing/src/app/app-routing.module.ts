import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/main/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
