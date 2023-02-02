import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPartiesPipe } from './filter-parties/filter-parties.pipe';
import { FilterPoliticiansPipe } from './filter-politicians/filter-politicians.pipe';
import { DateFormatterPipe } from './date-formatter.pipe';

@NgModule({
  declarations: [FilterPartiesPipe, FilterPoliticiansPipe, DateFormatterPipe],
  imports: [CommonModule],
  exports: [FilterPartiesPipe, FilterPoliticiansPipe, DateFormatterPipe],
})
export class PipeModule {}
