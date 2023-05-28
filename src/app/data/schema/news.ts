import { FormControl } from '@angular/forms';

export interface INews {
  id: string;
  heading: string;
  content: string;
  imageUrl: string;
  publishDate: Date;
}

export interface INewsState {
  news: INews[];
  selectedNews: INews;
}

export interface INewsForm {
  heading: FormControl<string>;
  content: FormControl<string>;
  imageUrl: FormControl<string>;
}
