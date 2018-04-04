import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ManageSevice } from '../services/manage.service';
import { ManagmentComponent } from './managment/managment.component';
import { EmployersComponent } from './employers/employers.component';


const appRoutes: Routes = [
{path: 'manage', component: ManagmentComponent},
{path: 'employers', component: EmployersComponent},
{path: '', component: EmployersComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ManagmentComponent,
    EmployersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ManageSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
