import { Injectable } from '@angular/core';
import { Carddata } from '../components/cards/carddata';

@Injectable({
  providedIn: 'root',
})
export class CardserviceService {
  url = 'http://localhost:3000/cardsList';

  constructor() {}

  async getAllCardDataList(): Promise<Carddata[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? []; 
  }
}
