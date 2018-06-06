import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatebotComponent } from './createbot/createbot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
	{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'createbot',
    component: CreatebotComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }