import { CliProjectPage } from './app.po';

describe('cli-project App', () => {
  let page: CliProjectPage;

  beforeEach(() => {
    page = new CliProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
