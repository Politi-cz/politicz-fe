import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathToPartyLogoPipe } from './path-to-party-logo.pipe';

@NgModule({
  declarations: [PathToPartyLogoPipe],
  imports: [CommonModule],
  exports: [PathToPartyLogoPipe],
})
export class PipeModule {}
