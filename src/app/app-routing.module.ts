import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'topic', pathMatch: 'full' },
  {
    path: 'topic',
    loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
