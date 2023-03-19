import { IPolitician } from '../data/schema/politician';
import { NotificationService } from '../shared/service/notification.service';
import { PoliticalPartiesService } from '../data/service/political-parties.service';
import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext, createSelector } from '@ngxs/store';
import { PoliticalParty } from '../action/political-party.action';
import { IPoliticalParty, IPoliticalPartyState } from '../data/schema/political-party';
import { Utils } from '../shared/utils/utils';
import { PoliticalPartyStateDefaultMock } from '../../assets/parties-mock-data';
import { Router } from '@angular/router';

@State<IPoliticalPartyState>({
  name: 'PoliticalPartyState',
  defaults: PoliticalPartyStateDefaultMock,
})
@Injectable()
export class PoliticalPartyState {
  constructor(
    private politicalPartyService: PoliticalPartiesService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  @Selector()
  public static getPoliticalParty(state: IPoliticalPartyState): IPoliticalParty {
    return state.selectedParty;
  }

  @Selector()
  public static getPoliticalPartyId(state: IPoliticalPartyState): string | undefined {
    return state.selectedParty.id;
  }

  @Selector()
  public static getAllParties(state: IPoliticalPartyState): IPoliticalParty[] {
    return state.parties;
  }

  @Selector()
  public static getPoliticians(state: IPoliticalPartyState): IPolitician[] {
    return state.selectedParty.politicians;
  }

  public static getPoliticianById(id: string): any {
    return createSelector([PoliticalPartyState], (state: IPoliticalPartyState) => {
      return state.selectedParty.politicians.filter((p: IPolitician) => p.id === id)[0];
    });
  }

  @Action(PoliticalParty.GetPoliticalParty, { cancelUncompleted: true })
  public getPoliticalParty(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.GetPoliticalParty,
  ): void {
    const selectedParty: IPoliticalParty | undefined = ctx
      .getState()
      .parties.find((party: IPoliticalParty) => party.id === payload);

    if (selectedParty) {
      ctx.patchState({ selectedParty: { ...selectedParty } });
    } else {
      this.notificationService.showError('Party with this ID does not exist');
      this.router.navigate(['/']);
    }
  }

  @Action(PoliticalParty.CreatePoliticalParty)
  public createPoliticalParty(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.CreatePoliticalParty,
  ): void {
    const id = Utils.generateGuid();
    const newParty: IPoliticalParty = { ...payload, id };

    ctx.patchState({ parties: [...ctx.getState().parties, newParty] });
    this.notificationService.showSuccess('party-create-success');
  }

  @Action(PoliticalParty.UpdatePoliticalParty)
  public updatePoliticalParty(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.UpdatePoliticalParty,
  ): void {
    let parties = [...ctx.getState().parties];

    const indexOfEditedParty = parties.findIndex(
      (party: IPoliticalParty) => party.id === payload.id,
    );

    parties[indexOfEditedParty] = { ...payload };

    ctx.patchState({ parties: [...parties] });
    this.notificationService.showSuccess('party-edit-success');
  }

  @Action(PoliticalParty.RemovePoliticalParty)
  public removePoliticalParty(
    ctx: StateContext<IPoliticalPartyState>,
    { id }: PoliticalParty.RemovePoliticalParty,
  ): void {
    this.notificationService.showSuccess('party-remove-success');
    const filteredParties = ctx
      .getState()
      .parties.filter((party: IPoliticalParty) => party.id !== id);
    ctx.patchState({ parties: filteredParties });
  }

  @Action(PoliticalParty.AddPolitician)
  public addPolitician(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.AddPolitician,
  ): void {
    const politician: IPolitician = { id: Utils.generateGuid(), ...payload };
    const selectedParty = ctx.getState().selectedParty;
    const partyPosition = ctx
      .getState()
      .parties.findIndex((party: IPoliticalParty) => party.id === selectedParty.id);

    if (partyPosition >= 0) {
      const parties = ctx.getState().parties;
      parties[partyPosition].politicians.push(politician);
      ctx.patchState({ parties: parties });
    }
    this.notificationService.showSuccess('politician-create-success');
  }

  @Action(PoliticalParty.EditPolitician)
  public editPolitician(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.EditPolitician,
  ): void {
    const selectedParty = ctx.getState().selectedParty;
    const partyPosition = ctx
      .getState()
      .parties.findIndex((party: IPoliticalParty) => party.id === selectedParty.id);

    if (partyPosition >= 0) {
      const parties = ctx.getState().parties;

      const indexOfEditedPolitician = selectedParty.politicians.findIndex(
        (oldPolitician: IPolitician) => oldPolitician.id === payload.id,
      );

      if (indexOfEditedPolitician === -1) {
        this.notificationService.showError('Wrong politician id');

        return;
      }

      parties[partyPosition].politicians[indexOfEditedPolitician] = { ...payload };

      ctx.patchState({ parties: parties });
    }
  }

  @Action(PoliticalParty.RemovePolitician)
  public removePolitician(
    ctx: StateContext<IPoliticalPartyState>,
    { payload }: PoliticalParty.RemovePolitician,
  ): void {
    const selectedParty = ctx.getState().selectedParty;
    const partyPosition = ctx
      .getState()
      .parties.findIndex((party: IPoliticalParty) => party.id === selectedParty.id);

    if (partyPosition >= 0) {
      const parties = ctx.getState().parties;

      const indexOfEditedPolitician = selectedParty.politicians.findIndex(
        (oldPolitician: IPolitician) => oldPolitician.id === payload.id,
      );

      if (indexOfEditedPolitician === -1) {
        this.notificationService.showError('Wrong politician id');

        return;
      }

      const filteredPoliticians = parties[partyPosition].politicians.filter(
        (politician: IPolitician) => politician.id !== payload.id,
      );

      parties[partyPosition].politicians = [...filteredPoliticians];

      ctx.patchState({ parties: parties, selectedParty: { ...parties[partyPosition] } });
    }
  }
}
