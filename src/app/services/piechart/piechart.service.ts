import { Injectable } from '@angular/core';
import { PieData } from '../../components/pirchart/pie-data';

@Injectable({
  providedIn: 'root',
})
export class PiechartService {
  url = 'http://localhost:3000/signups';

  constructor() {}

  async getAllPieData(): Promise<PieData[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
