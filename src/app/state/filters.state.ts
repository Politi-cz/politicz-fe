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
  public static getPartyFilterCount(state: IFiltersCount): number | undefined {
    return state.partyFilterCount;
  }

  @Selector()
  public static getPoliticianFilterCount(state: IFiltersCount): number | undefined {
    return state.politicianFilterCount;
  }

  @Action(Filters.Set) public setFilters(
    ctx: StateContext<IFiltersCount>,
    { payload }: Filters.Set,
  ): void {
    ctx.patchState({ ...ctx.getState, ...payload });
  }
}
