import { Observer } from './observer';

describe('Observer', () => {
  let directive: Observer;

  beforeEach(() => {
    directive = new Observer({ nativeElement: document.createElement('div') } as any);
  
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

});
