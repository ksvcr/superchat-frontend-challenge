import { decodeLinkHash } from './generateLink';

describe('when decodeLinkHash called with valid hash', () => {
  it('should return params object', () => {
    const result = decodeLinkHash(
      'eyJuYW1lIjoicmVhY3QiLCJvd25lciI6ImZhY2Vib29rIiwiY29sb3IiOiIjOWRjMWZiIiwiaWNvbiI6InB1bXBraW4ifQ=='
    );

    expect(result).toEqual({ color: '#9dc1fb', icon: 'pumpkin', name: 'react', owner: 'facebook' });
  });
});

describe('when decodeLinkHash called with invalid hash', () => {
  it('should return undefined', () => {
    const result = decodeLinkHash('test');

    expect(result).toEqual(undefined);
  });
});
