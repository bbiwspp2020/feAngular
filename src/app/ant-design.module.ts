import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NzButtonModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule
  ]
})
export class AntDesignModule { }
