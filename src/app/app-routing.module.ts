import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondDisplayComponent } from './second-display/second-display.component';
import { HomeComponent } from './home/home.component';
import { ThirdDisplayComponent } from './third-display/third-display.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'second_display', component: SecondDisplayComponent },
  { path: 'third_display', component: ThirdDisplayComponent },
  // { path: '**', redirectTo: '' },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
