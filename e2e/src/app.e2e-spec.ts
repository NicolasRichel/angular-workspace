import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Training App');
  });
});
