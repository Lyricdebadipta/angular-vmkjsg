import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InvertedChildComponent } from './inverted-child/inverted-child.component';
import { InvertedParentComponent } from './inverted-parent/inverted-parent.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Exercise2Component,
    ParentComponent,
    ChildComponent,
    InvertedChildComponent,
    InvertedParentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise2Component
    }])
  ]
})
export class Exercise2Module { }
