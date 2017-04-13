/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/component';
import { NotFound404Component } from './components/not-found404/component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './components/lazy/index#LazyModule' },
  { path: 'sync', loadChildren: './components/sync/index#SyncModule?sync=true' },
  { path: '**', component: NotFound404Component }
];
