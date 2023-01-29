import { NotificationService } from './../../../shared/service/notification.service';
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
}) //TODO Unit tests
@Injectable()
export class politicalPartyState {
  constructor(
    private politicalPartyService: PoliticalPartiesService,
    private notificationService: NotificationService
  ) {}

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
    return this.politicalPartyService.addPolitician(ctx.getState().id, payload).pipe(
      tap(politician => {
        return ctx.patchState({ politicians: [...ctx.getState().politicians, politician] });
      })
    );
  }

  @Action(PoliticalParty.EditPolitician)
  editPolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.EditPolitician) {
    return this.politicalPartyService.editPolitician(ctx.getState().id, payload).pipe(
      tap(politician => {
        let politicians = [...ctx.getState().politicians];

        const indexOfEditedPolitician = politicians.findIndex(oldPolitician => oldPolitician.id === politician.id);

        if (indexOfEditedPolitician === -1) {
          this.notificationService.showError('Wrong politician id');
          return;
        }

        politicians[indexOfEditedPolitician] = { ...politician };

        return ctx.patchState({ politicians: [...politicians] });
      })
    );
  }

  @Action(PoliticalParty.RemovePolitician)
  removePolitician(ctx: StateContext<IPoliticalParty>, { payload }: PoliticalParty.RemovePolitician) {
    return this.politicalPartyService.removePolitician(payload.id!).pipe(
      tap(() => {
        const filteredPoliticians = ctx.getState().politicians.filter(politician => politician.id !== payload.id);
        ctx.patchState({ politicians: filteredPoliticians });
      })
    );
  }
}
