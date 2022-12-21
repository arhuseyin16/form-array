import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

 const routes: Routes = [
   {
     path: 'formArray',
     component: FormArrayComponent
   },
   { path: '**', redirectTo: 'formArray' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
