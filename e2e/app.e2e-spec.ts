import { NgOrganizationChartPage } from './app.po';

describe('ng-organization-chart App', () => {
  let page: NgOrganizationChartPage;

  beforeEach(() => {
    page = new NgOrganizationChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
