import { IPartySidenavItem } from './../../../data/schema/party-sidenav-item';
import { FilterPartiesPipe } from './filter-parties.pipe';

describe('FilterPartiesPipe', () => {
  const pipe = new FilterPartiesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return only parties that contain searched value in name', () => {
    const parties: IPartySidenavItem[] = [
      {
        name: 'Strana1',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
      {
        name: 'DruhaStrana',
        id: '2',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
      {
        name: 'NejsemNic',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
    ];

    const searchedValue = 'strana';

    expect(pipe.transform(parties, searchedValue).length).toBe(2);
  });

  it('return only parties that contain searched value in tags', () => {
    const parties: IPartySidenavItem[] = [
      {
        name: 'Strana1',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: ['s1'],
      },
      {
        name: 'DruhaStrana',
        id: '2',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
      {
        name: 'NejsemNic',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
    ];

    const searchedValue = 's1';

    expect(pipe.transform(parties, searchedValue).length).toBe(1);
  });

  it('return 0 parties when does not contain searched value', () => {
    const parties: IPartySidenavItem[] = [
      {
        name: 'Strana1',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: ['s1'],
      },
      {
        name: 'DruhaStrana',
        id: '2',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
      {
        name: 'NejsemNic',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
    ];

    const searchedValue = 's1das55da 6das 6d as';

    expect(pipe.transform(parties, searchedValue).length).toBe(0);
  });

  it('return provided parties when search value is empty', () => {
    const parties: IPartySidenavItem[] = [
      {
        name: 'Strana1',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: ['s1'],
      },
      {
        name: 'DruhaStrana',
        id: '2',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
      {
        name: 'NejsemNic',
        id: '1',
        image: {
          name: 's',
          extension: 'p',
        },
        tags: [],
      },
    ];

    const searchedValue = '';

    expect(pipe.transform(parties, searchedValue).length).toBe(parties.length);
  });
});
