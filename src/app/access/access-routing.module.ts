import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
  {
    path:'home', 
    component: HomeComponent,
  },
  {
    path:'about', 
    component: AboutComponent,
  },
  {
    path:'contact', 
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }



