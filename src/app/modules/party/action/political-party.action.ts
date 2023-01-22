import { IPoliticianRequest } from './../../../data/schema/politician-request';
import { IPolitician } from '../../../data/schema/politician';
import { IPoliticalParty } from '../../../data/schema/political-party';
export namespace PoliticalParty {
  export class Set {
    static readonly type = '[PoliticalParty] Set';

    constructor(public payload: IPoliticalParty) {}
  }

  export class LoadPoliticalPartyById {
    static readonly type = '[PoliticalParty] LoadPoliticalPartyById';

    constructor(public payload: string | null) {}
  }

  export class AddPolitician {
    static readonly type = '[PoliticalParty] Add politician';

    constructor(public payload: IPoliticianRequest) {}
  }

  export class EditPolitician {
    static readonly type = '[PoliticalParty] Edit politician';

    constructor(public payload: IPoliticianRequest) {}
  }

  export class RemovePolitician {
    static readonly type = '[PoliticalParty] Remove politician';

    constructor(public payload: IPolitician) {}
  }
}
