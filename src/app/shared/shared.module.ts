import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, PipeModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule, TranslateModule, PipeModule],
})
export class SharedModule {}
