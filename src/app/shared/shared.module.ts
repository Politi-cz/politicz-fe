import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipeModule } from './pipe/pipe.module';
import { AdminQuickMenuActionsComponent } from './component/admin-quick-menu-actions/admin-quick-menu-actions.component';
import { AdminSectionComponent } from './component/admin-section/admin-section.component';

@NgModule({
  declarations: [AdminQuickMenuActionsComponent, AdminSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    PipeModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
    PipeModule,
    AdminQuickMenuActionsComponent,
  ],
})
export class SharedModule {}
