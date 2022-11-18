import { Image } from 'src/app/data/schema/image';
import { PathToPartyLogoPipe } from './path-to-party-logo.pipe';

describe('ImagePathConvertorPipe', () => {
  const pipe = new PathToPartyLogoPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return a path to logo in assets from image object', () => {
    const imageObject: Image = {
      name: 'spd',
      extension: 'svg',
    };

    expect(pipe.transform(imageObject)).toBe('assets/party-logos/spd.svg');
  });
});
