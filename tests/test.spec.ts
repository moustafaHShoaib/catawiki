import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObject/HomePage';
import { searchResultPage } from '../PageObject/searchResultPage';
import { LotPage } from '../PageObject/LotPage';

const SearchItem='train'

test('Return Lot Information to the console', async ({ page }) => {
  const homePage=new HomePage(page);
  const searcResultPage=new searchResultPage(page);
  const lotPage=new LotPage(page)

  await homePage.gotoHomePage();
  await homePage.SearchForItem(SearchItem)
  await searcResultPage.selectItemFromSearchResult();
  await lotPage.printAllLotInfo()
  
});

