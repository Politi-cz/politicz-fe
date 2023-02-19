import { Observable, tap } from 'rxjs';
import { IPartySidenavItem } from 'src/app/data/schema/political-party';
import { ISidenavPartiesStateModel } from '../../data/schema/sidenav-partiers-state-model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SidenavPartiesActions } from '../action/sidenav-parties.action';
import { PoliticalPartiesService } from 'src/app/data/service/political-parties.service';
import { Filters } from 'src/app/action/filters.action';

@State<ISidenavPartiesStateModel>({
  name: 'SidenavPartiesState',
  defaults: {
    parties: [],
  },
})
@Injectable()
export class SidenavPartiesState {
  constructor(private _politicalPartiesService: PoliticalPartiesService) {}

  @Selector() public static getParties(state: ISidenavPartiesStateModel): IPartySidenavItem[] {
    return state.parties;
  }

  @Action(SidenavPartiesActions.GetSidenavParties) public getSidenavParties(ctx: StateContext<ISidenavPartiesStateModel>): Observable<IPartySidenavItem[]> {
    return this._politicalPartiesService.getPartiesForSidenav().pipe(tap((data: IPartySidenavItem[]) => {
      ctx.setState({parties: [...data]});
      ctx.dispatch(new Filters.Set({ partyFilterCount: data.length }));
    }));
  }
}
