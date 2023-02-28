import { IPolitician } from './../../../data/schema/politician';
import { FilterPoliticiansPipe } from './filter-politicians.pipe';

describe('FilterPoliticians', () => {
  const storeMock: any = {
    dispatch: jest.fn(),
  };

  const pipe = new FilterPoliticiansPipe(storeMock);

  const politicians: IPolitician[] = [
    {
      id: '1',
      fullName: 'Karel Kokos',
      profileImageUrl: 'kks',
      birthDate: new Date(),
    },
    {
      id: '2',
      fullName: 'Karel Topol',
      profileImageUrl: 'kks',
      birthDate: new Date(),
    },
    {
      id: '3',
      fullName: 'Prokop Černý',
      profileImageUrl: 'kks',
      birthDate: new Date(),
    },
  ];

  it('Should filter politicians by search value', () => {
    const searchValue = 'karel';

    expect(pipe.transform(politicians, searchValue).length).toBe(2);
  });

  it('Should filter politicians by search value', () => {
    const searchValue = 'čERNÝ';

    expect(pipe.transform(politicians, searchValue).length).toBe(1);
  });

  it('Should not filter if search value empty', () => {
    const searchValue = '';

    expect(pipe.transform(politicians, searchValue).length).toBe(politicians.length);
  });
});
