import { expect, type Locator, type Page } from '@playwright/test';


export class searchResultPage {
  readonly page: Page;
  readonly secondSearchItem: Locator;



  constructor(page: Page) {
    this.page = page;
    this.secondSearchItem=this.page.locator('.c-extended-lot-card').nth(1)
  }



async selectItemFromSearchResult()
{

await this.secondSearchItem.click()
await this.page.waitForLoadState()

}

}