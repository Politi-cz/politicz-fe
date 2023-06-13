import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRequest } from '../../../../../data/schema/news';
import { Store } from '@ngxs/store';
import { News } from '../../../action/news.action';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent {
  constructor(private _router: Router, private _store: Store) {}

  public navigateBack(): void {
    this._router.navigate(['/news']);
  }

  public onSubmit(formValue: NewsRequest): void {
    this._store.dispatch(new News.Add(formValue)).subscribe(() => this.navigateBack());
  }
}
