import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly pageHeader: Locator;
  readonly searchTextBox: Locator;
  readonly searchButton: Locator;
  readonly acceptCookies: Locator;
  readonly searchResultList: Locator;
  readonly SearchItem: Locator;



  constructor(page: Page) {
    this.page = page;
    this.pageHeader = page.locator('a', { hasText: 'The Online Marketplace with Weekly Auctions' });
    this.searchTextBox = page.getByTestId('search-field').first()
    this.searchButton=page.locator('.c-button__overlay').nth(1);
    this.acceptCookies=page.locator('#cookie_bar_agree_button')
    this.searchResultList=page.locator('.IfinAqxhDDqXSjHxCoBA')
    this.SearchItem=page.locator('.u-p-t-xxs',{ hasText: 'RegionalExpress double-deck carriages' }).first()
  }

  async gotoHomePage() {
    await this.page.goto('https://www.catawiki.com/en/');
    await this.acceptCookies.click()
  }

async SearchForItem(Item: string)
{

await this.searchTextBox.click();
await this.searchTextBox.fill(Item);
expect(this.searchResultList).toBeVisible()
await this.searchButton.click()
await expect(this.page).toHaveURL("https://www.catawiki.com/en/s?q=train&sort=relevancy_desc&page=1",{timeout:2000})
}

}