import { Observer } from './observer';

describe('Observer', () => {
  it('should create an instance', () => {
    const directive = new Observer();
    expect(directive).toBeTruthy();
  });
});
