import { ResumeUpdatePage } from './app.po';

describe('resume-update App', () => {
  let page: ResumeUpdatePage;

  beforeEach(() => {
    page = new ResumeUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
