import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
      { path: '', redirectTo: 'login-register', pathMatch: 'full' },
      { path: 'login-register', component: LoginRegComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'testing', component: TestingComponent },
      // { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
      { path: 'purchase', component: DashboardComponent },
  //     { path: 'check', component: ReqChecklistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
