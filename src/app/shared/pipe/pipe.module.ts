import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathToPartyLogoPipe } from './pathToPartyLogo/path-to-party-logo.pipe';
import { FilterPartiesPipe } from './filter-parties.pipe';
import { FilterPoliticiansPipe } from './filter-politicians.pipe';
import { DateFormatterPipe } from './date-formatter.pipe';

@NgModule({
  declarations: [PathToPartyLogoPipe, FilterPartiesPipe, FilterPoliticiansPipe, DateFormatterPipe],
  imports: [CommonModule],
  exports: [PathToPartyLogoPipe, FilterPartiesPipe, FilterPoliticiansPipe, DateFormatterPipe],
})
export class PipeModule {}
