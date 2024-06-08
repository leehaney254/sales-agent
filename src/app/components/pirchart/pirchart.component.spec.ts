import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirchartComponent } from './pirchart.component';

describe('PirchartComponent', () => {
  let component: PirchartComponent;
  let fixture: ComponentFixture<PirchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PirchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PirchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
