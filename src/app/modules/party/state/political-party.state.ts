import { SidenavPartiesActions } from 'src/app/core/action/sidenav-parties.action';
import { IPolitician, IPoliticianResponse } from '../../../data/schema/politician';
import { NotificationService } from '../../../shared/service/notification.service';
import { PoliticalPartiesService } from '../../../data/service/political-parties.service';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PoliticalParty } from '../action/political-party.action';
import {
  ICreatePoliticalPartyResponse,
  IPoliticalParty,
  IPoliticalPartyPoliticiansFree,
} from '../../../data/schema/political-party';
import { Observable, tap } from 'rxjs';

@State<IPoliticalParty>({
  name: 'PoliticalPartyState',
  defaults: {
    id: '',
    name: 'kokodzina',
    imageUrl: '',
    politicians: [],
    tags: [],
  },
})
@Injectable()
export class PoliticalPartyState {
  constructor(
    private _politicalPartyService: PoliticalPartiesService,
    private _notificationService: NotificationService,
  ) {}

  @Selector()
  public static getPoliticalParty(state: IPoliticalParty): IPoliticalParty {
    return state;
  }

  @Selector()
  public static getPoliticalPartyId(state: IPoliticalParty): string | undefined {
    return state.id;
  }

  @Selector()
  public static getPoliticians(state: IPoliticalParty): IPolitician[] {
    return state.politicians;
  }

  @Action(PoliticalParty.GetPoliticalParty, { cancelUncompleted: true }) public getPoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.GetPoliticalParty,
  ): Observable<IPoliticalParty> {
    return this._politicalPartyService
      .getPoliticalParty(payload)
      .pipe(tap((data: IPoliticalParty) => ctx.setState(data)));
  }

  @Action(PoliticalParty.CreatePoliticalParty) public createPoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.CreatePoliticalParty,
  ): Observable<ICreatePoliticalPartyResponse> {
    return this._politicalPartyService.createPoliticalParty(payload).pipe(
      tap((data: ICreatePoliticalPartyResponse) => {
        ctx.patchState({ ...data });
        ctx.dispatch(new SidenavPartiesActions.GetSidenavParties());
        this._notificationService.showSuccess('party-create-success');
      }),
    );
  }

  @Action(PoliticalParty.UpdatePoliticalParty) public updatePoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.UpdatePoliticalParty,
  ): Observable<IPoliticalPartyPoliticiansFree> {
    return this._politicalPartyService.editPoliticalParty(payload).pipe(
      tap((data: IPoliticalPartyPoliticiansFree) => {
        ctx.patchState({ ...data });
        ctx.dispatch(new SidenavPartiesActions.GetSidenavParties());
        this._notificationService.showSuccess('party-edit-success');
      }),
    );
  }

  @Action(PoliticalParty.RemovePoliticalParty) public removePoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { id }: PoliticalParty.RemovePoliticalParty,
  ): Observable<void> {
    return this._politicalPartyService.removePoliticalParty(id).pipe(
      tap(() => {
        ctx.dispatch(new SidenavPartiesActions.GetSidenavParties());
        this._notificationService.showSuccess('party-remove-success');
      }),
    );
  }

  @Action(PoliticalParty.AddPolitician)
  public addPolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.AddPolitician,
  ): Observable<IPoliticianResponse> {
    return this._politicalPartyService.addPolitician(ctx.getState().id!, payload).pipe(
      tap((politician: IPoliticianResponse) => {
        ctx.patchState({ politicians: [...ctx.getState().politicians, politician] });
        this._notificationService.showSuccess('politician-create-success');
      }),
    );
  }

  @Action(PoliticalParty.EditPolitician)
  public editPolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.EditPolitician,
  ): Observable<IPoliticianResponse> {
    return this._politicalPartyService.editPolitician(payload.id!, payload).pipe(
      tap((politician: IPoliticianResponse) => {
        let politicians = [...ctx.getState().politicians];

        const indexOfEditedPolitician = politicians.findIndex(
          (oldPolitician: IPolitician) => oldPolitician.id === politician.id,
        );

        if (indexOfEditedPolitician === -1) {
          this._notificationService.showError('Wrong politician id');

          return;
        }

        politicians[indexOfEditedPolitician] = { ...politician };

        ctx.patchState({ politicians: [...politicians] });
        this._notificationService.showSuccess('politician-edit-success');
      }),
    );
  }

  @Action(PoliticalParty.RemovePolitician)
  public removePolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.RemovePolitician,
  ): Observable<void> {
    return this._politicalPartyService.removePolitician(payload.id!).pipe(
      tap(() => {
        const filteredPoliticians = ctx
          .getState()
          .politicians.filter((politician: IPolitician) => politician.id !== payload.id);

        ctx.patchState({ politicians: filteredPoliticians });
        this._notificationService.showSuccess('politician-remove-success');
      }),
    );
  }
}
