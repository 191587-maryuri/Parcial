import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {InicioComponent} from './inicio.component';
import {InicioPageRoutingModule} from './inicio-routing.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioComponent],
  exports: []

})
export class InicioPageModule {}
