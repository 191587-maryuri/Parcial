import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SobreNosotrosComponent} from './sobre-nosotros.component';
import {SobreNosotrosRoutingModule} from './sobre-nosotros-routing.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    SobreNosotrosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SobreNosotrosComponent],
  exports: []

})
export class SobreNosotrosPageModule {}
