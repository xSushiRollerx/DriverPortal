import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadDriverComponent } from './account-component/read-driver/read-driver.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ReadDriverComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
