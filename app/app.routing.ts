import { Routes, RouterModule } from '@angular/router';

import { AppFormComponent } from './form/form.component';
import { AppTableComponent } from './table/table.component';

const appRoutes: Routes = [
  { path: 'add', component: AppFormComponent },
  { path: ':role', component: AppTableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
