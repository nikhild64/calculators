import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},

  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'calculators', loadChildren: () => import('./calculators/calculators.module').then(m => m.CalculatorsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
