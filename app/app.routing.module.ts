import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentA } from './views/a/a.component';
import { ComponentB } from './views/b/b.component';

@NgModule({
  declarations: [ 
    ComponentB, ComponentA
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'componentB', component: ComponentB },
      { path: 'componentA', component: ComponentA },
      { path: '**', redirectTo: 'componentB' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


