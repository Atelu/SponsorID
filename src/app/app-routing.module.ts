import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorComponent } from './sponsor/sponsor.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   {
     path: 'login',
     loadChildren: './login/login.module#LoginModule',
   },

  {
    path: 'sponsor',
    component: SponsorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
