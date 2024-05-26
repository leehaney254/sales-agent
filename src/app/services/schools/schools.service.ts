import { Injectable } from '@angular/core';
import { Schools } from '../../components/schools/schools';

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  url = 'http://localhost:3000/schools';

  constructor() {}

  async getAllSchoolData(): Promise<Schools[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
