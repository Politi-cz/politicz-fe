import { IPolitician } from './politician';

export interface ICreatePoliticalPartyResponse {
  id: string;
  name: string;
  tags: string[];
  image: string;
  politicians: IPolitician[];
}
//TODO MOVE INTERFACES INTO SEPARATE FILES
