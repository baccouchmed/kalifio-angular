import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceCriteriasComponent } from './acceptance-criterias.component';

describe('AcceptanceCriteriasComponent', () => {
  let component: AcceptanceCriteriasComponent;
  let fixture: ComponentFixture<AcceptanceCriteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptanceCriteriasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptanceCriteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
