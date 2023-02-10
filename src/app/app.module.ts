import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LiderComponent } from './components/lider/lider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersService } from './services/users.service';

import { InstructorComponent } from './components/instructor/instructor.component';
import { LoginGuard } from './guardians/login.guard';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LiderComponent,
    NotFoundComponent,
    InstructorComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [UsersService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
