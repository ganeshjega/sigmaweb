import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { AddDatabaseComponent } from './addDatabase.component';
import { ViewDatabasesComponent } from './viewdatabases.component';
import { AddAppServerComponent } from './addAppServer.component';
import { ViewAppServersComponent } from './viewappservers.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sigma Env'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },
      {
        path: 'addDatabase',
        component: AddDatabaseComponent,
        data: {
          title: 'Add Database'
        }
      },
      {
        path: 'viewDatabases',
        component: ViewDatabasesComponent,
        data: {
          title: 'View Databases'
        }
      },
      {
        path: 'addAppServer',
        component: AddAppServerComponent,
        data: {
          title: 'Add Database'
        }
      },
      {
        path: 'viewAppServers',
        component: ViewAppServersComponent,
        data: {
          title: 'View Databases'
        }
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigmaEnvRoutingModule {}
