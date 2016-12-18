import { ElectricUsageMonitorClientCliPage } from './app.po';

describe('electric-usage-monitor-client-cli App', function() {
  let page: ElectricUsageMonitorClientCliPage;

  beforeEach(() => {
    page = new ElectricUsageMonitorClientCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
