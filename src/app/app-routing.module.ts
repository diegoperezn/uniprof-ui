import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignListComponent } from './design-list/design-list.component';
import { ClientTableComponent } from './client-table/client-table.component';

const routes: Routes = [
  { path: 'client', component: ClientTableComponent},
  { path: 'design', component: DesignListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
