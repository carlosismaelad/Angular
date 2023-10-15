import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ItemDatailComponent } from './components/item-datail/item-datail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'emiter', component: EmiterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDatailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
