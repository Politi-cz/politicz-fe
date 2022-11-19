import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Spinner } from '../action/spinner.action';

@State<boolean>({
  name: 'spinner',
  defaults: false,
})
@Injectable()
export class SpinnerState {
  @Selector()
  static getSpinnerState(state: boolean) {
    return state;
  }

  @Action(Spinner.Set) setSpinner(ctx: StateContext<boolean>, { payload }: Spinner.Set) {
    ctx.setState(payload);
  }
}
