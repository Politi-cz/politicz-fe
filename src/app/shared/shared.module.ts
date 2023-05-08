import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipeModule } from './pipe/pipe.module';
import { AdminQuickMenuActionsComponent } from './component/admin-quick-menu-actions/admin-quick-menu-actions.component';
import { AdminSectionComponent } from './component/admin-section/admin-section.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { PartyActionsComponent } from './component/party-actions/party-actions.component';

@NgModule({
  declarations: [
    AdminQuickMenuActionsComponent,
    AdminSectionComponent,
    ConfirmDialogComponent,
    PartyActionsComponent,
  ],
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
    PartyActionsComponent,
  ],
})
export class SharedModule {}
