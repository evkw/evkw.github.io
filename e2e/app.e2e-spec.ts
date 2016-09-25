import { EvkwGithubIoPage } from './app.po';

describe('evkw-github-io App', function() {
  let page: EvkwGithubIoPage;

  beforeEach(() => {
    page = new EvkwGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
