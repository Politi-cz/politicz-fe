import { PoliticalPartiesService } from '../../../data/service/political-parties.service';
import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { PoliticalParty } from '../action/political-party.action';
import { IPoliticalParty } from '../../../data/schema/political-party';

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

  @Action(PoliticalParty.LoadPoliticalPartyById) loadPoliticalPartyById(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.LoadPoliticalPartyById
  ) {
    this.politicalPartyService.getPoliticalParty(payload).subscribe(data => ctx.dispatch(new PoliticalParty.Set(data)));
  }

  @Action(PoliticalParty.Set)
  setPoliticalParty(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.Set) {
    ctx.patchState(payload);
  }

  @Action(PoliticalParty.AddPolitician)
  addPolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.AddPolitician) {
    this.politicalPartyService.addPolitician(ctx.getState().id, payload).subscribe();
  }

  @Action(PoliticalParty.RemovePolitician)
  removePolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.RemovePolitician) {
    this.politicalPartyService.removePolitician(payload.id).subscribe(() => {
      const filteredPoliticians = ctx.getState().politicians.filter(politician => politician.id !== payload.id);
      ctx.patchState({ politicians: filteredPoliticians });
    });
  }
}
