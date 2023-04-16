import { Observable } from 'rxjs';
import { SpinnerState } from '../../state/spinner.state';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  @Select(SpinnerState.getSpinnerState) spinner$!: Observable<boolean>;

  constructor(public auth: AuthService) {}
}
