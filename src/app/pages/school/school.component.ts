import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Schools } from '../../components/schools/schools';
import { SchoolsService } from '../../services/schools/schools.service';
import { SchoolsComponent } from '../../components/schools/schools.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [SidebarComponent, SchoolsComponent, TopbarComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css',
})
export class SchoolComponent {
  schoolList: Schools[] = [];

  schoolService: SchoolsService = inject(SchoolsService);

  constructor() {
    this.schoolService.getAllSchoolData().then((schoolService: any[]) => {
      this.schoolList = schoolService;
    });
  }
}
