import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  {path:'users',component:UsersComponent},
  {path:'user/:id',component:UserComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  // {path:'**',component:UsersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
