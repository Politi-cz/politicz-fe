import { IPolitician } from './politician';

export interface IPoliticalParty {
  id: string;
  name: string;
  tags: string[];
  image: string;
  politicians: IPolitician[];
}
