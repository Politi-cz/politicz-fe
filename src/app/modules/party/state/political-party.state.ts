import { SidenavPartiesActions } from 'src/app/action/sidenav-parties.action';
import { IPolitician, IPoliticianResponse } from '../../../data/schema/politician';
import { NotificationService } from '../../../shared/service/notification.service';
import { PoliticalPartiesService } from '../../../data/service/political-parties.service';
import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { PoliticalParty } from '../action/political-party.action';
import {
  ICreatePoliticalPartyResponse,
  IPoliticalParty,
  IPoliticalPartyPoliticiansFree,
} from '../../../data/schema/political-party';
import { tap, Observable } from 'rxjs';

//TODO Delete political party logic
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
    private politicalPartyService: PoliticalPartiesService,
    private notificationService: NotificationService,
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
    return this.politicalPartyService
      .getPoliticalParty(payload)
      .pipe(tap((data: IPoliticalParty) => ctx.setState(data)));
  }

  @Action(PoliticalParty.CreatePoliticalParty) public createPoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.CreatePoliticalParty,
  ): Observable<ICreatePoliticalPartyResponse> {
    return this.politicalPartyService.createPoliticalParty(payload).pipe(
      tap((data: ICreatePoliticalPartyResponse) => {
        ctx.patchState({ ...data });
        ctx.dispatch(new SidenavPartiesActions.GetSidenavParties());
      }),
    );
  }

  @Action(PoliticalParty.UpdatePoliticalParty) public updatePoliticalParty(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.UpdatePoliticalParty,
  ): Observable<IPoliticalPartyPoliticiansFree> {
    return this.politicalPartyService.editPoliticalParty(payload).pipe(
      tap((data: IPoliticalPartyPoliticiansFree) => {
        ctx.patchState({ ...data });
        ctx.dispatch(new SidenavPartiesActions.GetSidenavParties());
      }),
    );
  }

  @Action(PoliticalParty.AddPolitician)
  public addPolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.AddPolitician,
  ): Observable<IPoliticianResponse> {
    return this.politicalPartyService.addPolitician(ctx.getState().id!, payload).pipe(
      tap((politician: IPoliticianResponse) => {
        return ctx.patchState({ politicians: [...ctx.getState().politicians, politician] });
      }),
    );
  }

  @Action(PoliticalParty.EditPolitician)
  public editPolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.EditPolitician,
  ): Observable<IPoliticianResponse> {
    return this.politicalPartyService.editPolitician(payload.id!, payload).pipe(
      tap((politician: IPoliticianResponse) => {
        let politicians = [...ctx.getState().politicians];

        const indexOfEditedPolitician = politicians.findIndex(
          (oldPolitician: IPolitician) => oldPolitician.id === politician.id,
        );

        if (indexOfEditedPolitician === -1) {
          this.notificationService.showError('Wrong politician id');

          return;
        }

        politicians[indexOfEditedPolitician] = { ...politician };

        return ctx.patchState({ politicians: [...politicians] });
      }),
    );
  }

  @Action(PoliticalParty.RemovePolitician)
  public removePolitician(
    ctx: StateContext<IPoliticalParty>,
    { payload }: PoliticalParty.RemovePolitician,
  ): Observable<void> {
    return this.politicalPartyService.removePolitician(payload.id!).pipe(
      tap(() => {
        const filteredPoliticians = ctx
          .getState()
          .politicians.filter((politician: IPolitician) => politician.id !== payload.id);
        ctx.patchState({ politicians: filteredPoliticians });
      }),
    );
  }
}
