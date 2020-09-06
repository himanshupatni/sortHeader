import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortValuesComponent } from './sort-values/sort-values.component';

const routes: Routes = [{ path: 'sort', component: SortValuesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
