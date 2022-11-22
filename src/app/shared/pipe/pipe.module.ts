import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathToPartyLogoPipe } from './pathToPartyLogo/path-to-party-logo.pipe';
import { FilterPartiesPipe } from './filterParties/filter-parties.pipe';
import { FilterPoliticiansPipe } from './filterPoliticians/filter-politicians.pipe';

@NgModule({
  declarations: [PathToPartyLogoPipe, FilterPartiesPipe, FilterPoliticiansPipe],
  imports: [CommonModule],
  exports: [PathToPartyLogoPipe, FilterPartiesPipe, FilterPoliticiansPipe],
})
export class PipeModule {}
