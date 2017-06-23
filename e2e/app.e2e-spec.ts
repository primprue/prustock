import { PrustockPage } from './app.po';

describe('prustock App', () => {
  let page: PrustockPage;

  beforeEach(() => {
    page = new PrustockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
