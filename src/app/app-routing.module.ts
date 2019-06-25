import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component';

const routes: Routes = [
  { path : 'spells', component : SpellListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
