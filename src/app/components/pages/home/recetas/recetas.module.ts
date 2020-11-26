import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RecetasComponent} from './recetas.component';
import {RecetasRoutingModule} from './recetas-routing.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    RecetasRoutingModule
  ],
  declarations: [RecetasComponent],
  exports: []

})
export class RecetasPageModule {}
