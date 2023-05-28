import { Component, Input } from '@angular/core';
import { INews, INewsForm } from '../../../../data/schema/news';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Utils } from '../../../../shared/utils/utils';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent {
  @Input() news: INews | undefined;

  public newsForm = this._fb.group<INewsForm>({
    heading: this._fb.control('', { validators: [Validators.required] }),
    imageUrl: this._fb.control('', {
      validators: [Validators.required, Validators.pattern(Utils.URL_PATTERN)],
    }),
    content: this._fb.control('', {
      validators: [Validators.required, Validators.maxLength(5000)],
    }),
  });

  constructor(private _fb: NonNullableFormBuilder) {}
}
