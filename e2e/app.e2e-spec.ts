import { CleanPage } from './app.po';

describe('clean App', function() {
  let page: CleanPage;

  beforeEach(() => {
    page = new CleanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
