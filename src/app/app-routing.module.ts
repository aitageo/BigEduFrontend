import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LiderComponent } from './components/lider/lider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LoginGuard } from './guardians/login.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'lider',component:LiderComponent,canActivate:[LoginGuard]},
  {path:'instructor',component:InstructorComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
