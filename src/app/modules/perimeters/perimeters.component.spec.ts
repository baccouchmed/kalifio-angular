import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimetersComponent } from './perimeters.component';

describe('PerimetersComponent', () => {
  let component: PerimetersComponent;
  let fixture: ComponentFixture<PerimetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerimetersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerimetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
