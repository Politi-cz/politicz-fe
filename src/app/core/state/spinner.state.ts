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
  public static getSpinnerState(state: boolean): boolean {
    return state;
  }

  @Action(Spinner.Set) public setSpinner(
    ctx: StateContext<boolean>,
    { payload }: Spinner.Set,
  ): void {
    ctx.setState(payload);
  }
}
