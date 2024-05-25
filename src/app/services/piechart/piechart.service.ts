import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PiechartService {
  url = 'http://localhost:3000/signups';

  constructor() {}

  async getAllPieData(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
