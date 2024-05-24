import { Injectable } from '@angular/core';
import { Carddata } from '../components/cards/carddata';

@Injectable({
  providedIn: 'root',
})
export class CardserviceService {
  protected cardDataList: Carddata[] = [
    { name: 'Collection', value: 12500, icon: 'monetization_on' },
    { name: 'Signups', value: 200, icon: 'people' },
    { name: 'Total Revenue', value: 34500, icon: 'attach_money' },
    { name: 'Bounced Checks', value: 10, icon: 'undo' },
  ];
  constructor() {}

  getAllCardDataList(): Carddata[] {
    return this.cardDataList; 
  }
}
