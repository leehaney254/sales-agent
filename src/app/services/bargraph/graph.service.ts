import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  url = 'http://localhost:3000/products';

  constructor() {}

  async getAllGraphData(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
