import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmiterComponent } from './components/emiter/emiter.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'emiter', component: EmiterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
