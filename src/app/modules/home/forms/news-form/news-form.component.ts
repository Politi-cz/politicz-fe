import { Component, Input } from '@angular/core';
import { INews, INewsForm } from '../../../../data/schema/news';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Utils } from '../../../../shared/utils/utils';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent extends AbstractFormComponent {
  @Input() public set news(value: INews | undefined) {
    if (value) {
      this._news = value;
      this.initializeFormData(value);
    }
  }

  public get news(): INews {
    return this._news;
  }

  private _news: INews;

  public newsForm = this._fb.group<INewsForm>({
    heading: this._fb.control('', { validators: [Validators.required] }),
    imageUrl: this._fb.control('', {
      validators: [Validators.required, Validators.pattern(Utils.URL_PATTERN)],
    }),
    content: this._fb.control('', {
      validators: [Validators.required, Validators.maxLength(5000)],
    }),
  });

  constructor(private _fb: NonNullableFormBuilder) {
    super();
  }

  private initializeFormData(news: INews) {
    this.newsForm.setValue({
      heading: news.heading,
      content: news.content,
      imageUrl: news.imageUrl,
    });
  }
}
