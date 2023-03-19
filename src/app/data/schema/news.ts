export interface INews {
  id: string;
  heading: string;
  content: string;
  publishDate?: Date;
}

export interface INewsState {
  news: INews[];
  selectedNews: INews;
}
