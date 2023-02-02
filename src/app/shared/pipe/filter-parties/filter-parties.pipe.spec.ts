import { IPoliticalParty } from './../../../data/schema/political-party';
import { FilterPartiesPipe } from './filter-parties.pipe';
describe('FilterPartiesPipe', () => {
  const storeMock: any = {
    dispatch: jest.fn(),
  };

  const pipe = new FilterPartiesPipe(storeMock);

  const parties: IPoliticalParty[] = [
    {
      id: '1',
      image: '',
      name: 'SPD',
      politicians: [],
      tags: ['Úsvit příme demokracio', 'Tomio'],
    },
    {
      id: '2',
      image: '',
      name: 'Pirati',
      politicians: [],
      tags: ['Bartoš', 'tráva'],
    },
  ];

  it('filter parties that has search value in name', () => {
    const searchValue = 'spd';

    expect(pipe.transform(parties, searchValue).length).toBe(1);
  });

  it('filter parties that has search value in tags', () => {
    const searchValue = 'Úsvit';

    expect(pipe.transform(parties, searchValue).length).toBe(1);
  });

  it('Do not filter when search value is empty', () => {
    const searchValue = '';

    expect(pipe.transform(parties, searchValue).length).toBe(parties.length);
  });
});
