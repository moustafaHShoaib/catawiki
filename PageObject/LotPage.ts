import { expect, type Locator, type Page } from '@playwright/test';


export class LotPage {
  readonly page: Page;
  readonly lotName: Locator;
   readonly favoriteCounter: Locator;
   readonly currentBid: Locator;



  constructor(page: Page) {
    this.page = page;
    this.lotName=this.page.locator('.be-lot-details-scrollable-gallery__title--multiline').first()
    this.favoriteCounter=this.page.locator('.yjcq3OerDzMBCKFPpI0T').first();
    this.currentBid=this.page.locator('.u-typography-h2').first();
  }

  async printAllLotInfo()
  {
  
console.log('Lot Name is---> '+await this.lotName.textContent());
console.log('Current Bid Value is ----> '+ await this.currentBid.textContent());
console.log('Current Favorite Counter is --->'+await this.favoriteCounter.textContent())
  
  }

}