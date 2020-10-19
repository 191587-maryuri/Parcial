import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ProductosComponent} from './productos.component';
import {ProductosRoutingModule} from './productos-routing.modules';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    ProductosRoutingModule
  ],
  declarations: [ProductosComponent],
  exports: []

})
export class ProductosPageModule {}
