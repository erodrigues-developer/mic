import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAssociateComponent } from './filter-associate.component';

describe('FilterAssociateComponent', () => {
  let component: FilterAssociateComponent;
  let fixture: ComponentFixture<FilterAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
