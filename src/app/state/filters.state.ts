import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Filters } from '../action/filters.action';
import { IFiltersCount } from '../data/schema/filters-count';

@State<IFiltersCount>({
  name: 'filters',
  defaults: {
    partyFilterCount: 1,
    politicianFilterCount: 1,
  },
})
@Injectable()
export class FiltersState {
  @Selector()
  static getPartyFilterCount(state: IFiltersCount) {
    return state.partyFilterCount;
  }

  @Selector()
  static getPoliticianFilterCount(state: IFiltersCount) {
    return state.politicianFilterCount;
  }

  @Action(Filters.Set) setFilters(ctx: StateContext<IFiltersCount>, { payload }: Filters.Set) {
    ctx.patchState({ ...ctx.getState, ...payload });
  }
}
