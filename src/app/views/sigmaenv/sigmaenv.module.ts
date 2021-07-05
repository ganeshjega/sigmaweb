// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { AddDatabaseComponent } from './addDatabase.component';

// Theme Routing
import { SigmaEnvRoutingModule } from './sigmaenv-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ViewDatabasesComponent } from './viewdatabases.component';
import { AddAppServerComponent } from './addAppServer.component';
import { ViewAppServersComponent } from './viewappservers.component';

@NgModule({
  imports: [ 
    CommonModule,  
    FormsModule,
    SigmaEnvRoutingModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    AddDatabaseComponent,
    ViewDatabasesComponent,
    AddAppServerComponent,
    ViewAppServersComponent
  ]
})
export class SigmaEnvModule { }
