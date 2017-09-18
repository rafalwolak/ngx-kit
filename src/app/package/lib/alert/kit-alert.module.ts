import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitSlideModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { KitAlertTitleComponent } from './kit-alert-title/kit-alert-title.component';
import { KitAlertComponent } from './kit-alert/kit-alert.component';

const exp = [
  KitAlertComponent,
  KitAlertTitleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitSlideModule,
    KitCommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitAlertModule {
}
