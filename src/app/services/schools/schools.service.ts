import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  url = 'http://localhost:3000/schools';

  constructor() {}

  async getAllSchoolData(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
