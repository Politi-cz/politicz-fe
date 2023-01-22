import { PoliticalPartiesService } from '../../../data/service/political-parties.service';
import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { PoliticalParty } from '../action/political-party.action';
import { IPoliticalParty } from '../../../data/schema/political-party';
import { tap } from 'rxjs';

@State<IPoliticalParty>({
  name: 'politicalPartyState',
  defaults: {
    id: '',
    name: 'kokodzina',
    image: { name: '', extension: '' },
    politicians: [],
    tags: [],
  },
})
@Injectable()
export class politicalPartyState {
  constructor(private politicalPartyService: PoliticalPartiesService) {}

  @Selector()
  static getPoliticalParty(state: IPoliticalParty) {
    return state;
  }

  @Selector()
  static getPoliticalPartyId(state: IPoliticalParty) {
    return state.id;
  }

  @Selector()
  static getPoliticians(state: IPoliticalParty) {
    return state.politicians;
  }

  @Action(PoliticalParty.GetPoliticalParty, { cancelUncompleted: true }) getPoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.GetPoliticalParty
  ) {
    return this.politicalPartyService.getPoliticalParty(payload).pipe(tap(data => ctx.setState(data)));
  }

  @Action(PoliticalParty.AddPolitician)
  addPolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.AddPolitician) {
    return this.politicalPartyService.addPolitician(ctx.getState().id, payload); //No need to add politician to state, politicians are reloaded after adding
  }

  @Action(PoliticalParty.EditPolitician)
  editPolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.EditPolitician) {
    return this.politicalPartyService.editPolitician(payload); //No need to add modified politician to state, politicians are reloaded after editing.
  }

  @Action(PoliticalParty.RemovePolitician)
  removePolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.RemovePolitician) {
    return this.politicalPartyService.removePolitician(payload.id).pipe(
      tap(() => {
        const filteredPoliticians = ctx.getState().politicians.filter(politician => politician.id !== payload.id);
        ctx.patchState({ politicians: filteredPoliticians });
      })
    );
  }
}
