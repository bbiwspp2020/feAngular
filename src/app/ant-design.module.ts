import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzModalModule } from 'ng-zorro-antd/modal';
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
    NzInputModule,
    NzMenuModule,
    NzBadgeModule,
    NzCarouselModule,
    NzStatisticModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzModalModule
  ]
})
export class AntDesignModule { }
