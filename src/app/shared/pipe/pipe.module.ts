import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathToPartyLogoPipe } from './pathToPartyLogo/path-to-party-logo.pipe';
import { FilterPartiesPipe } from './filterParties/filter-parties.pipe';

@NgModule({
  declarations: [PathToPartyLogoPipe, FilterPartiesPipe],
  imports: [CommonModule],
  exports: [PathToPartyLogoPipe, FilterPartiesPipe],
})
export class PipeModule {}
