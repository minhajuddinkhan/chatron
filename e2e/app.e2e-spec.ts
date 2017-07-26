import { ChatronPage } from './app.po';

describe('chatron App', () => {
  let page: ChatronPage;

  beforeEach(() => {
    page = new ChatronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
