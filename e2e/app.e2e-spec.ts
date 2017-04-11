import { RcclExcaliburPage } from './app.po';

describe('rccl-excalibur App', function() {
  let page: RcclExcaliburPage;

  beforeEach(() => {
    page = new RcclExcaliburPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
