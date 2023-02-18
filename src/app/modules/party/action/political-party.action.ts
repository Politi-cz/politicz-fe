import { IPoliticalParty, IPoliticalPartyPolticiansFree } from './../../../data/schema/political-party';
import { IPolitician } from '../../../data/schema/politician';

export namespace PoliticalParty {
  export class GetPoliticalParty {
    static readonly type = '[PoliticalParty] LoadPoliticalPartyById';

    constructor(public payload: string | null) {}
  }

  export class CreatePoliticalParty {
    static readonly type = '[Politicalparty] Create political party';

    constructor(public payload: IPoliticalParty) {}
  }

  export class UpdatePoliticalParty {
    static readonly type = '[Politicalparty] Update political party';

    constructor(public payload: IPoliticalPartyPolticiansFree) {}
  }

  export class AddPolitician {
    static readonly type = '[PoliticalParty] Add politician';

    constructor(public payload: IPolitician) {}
  }

  export class EditPolitician {
    static readonly type = '[PoliticalParty] Edit politician';

    constructor(public payload: IPolitician) {}
  }

  export class RemovePolitician {
    static readonly type = '[PoliticalParty] Remove politician';

    constructor(public payload: IPolitician) {}
  }
}
