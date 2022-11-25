import { IPolitician } from './politician';
import { Image } from './image';

export interface IPoliticalParty {
  id: string;
  name: string;
  tags: string[];
  image: Image;
  politicians: IPolitician[];
}
