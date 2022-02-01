import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DragonsService } from './../_services/dragons.service';
import { DragonsListComponent } from './list';
import { DragonsFormComponent } from './form';
import { DragonsDetailsComponent } from './details';

@NgModule({
  declarations: [
    DragonsListComponent,
    DragonsFormComponent,
    DragonsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  	DragonsService
  ]
})
export class DragonsModule { }
