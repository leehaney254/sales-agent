import { Injectable } from '@angular/core';
import { Barchartdata } from '../../components/barchart/barchartdata';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  url = 'http://localhost:3000/products';

  constructor() {}

  async getAllGraphData(): Promise<Barchartdata[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
