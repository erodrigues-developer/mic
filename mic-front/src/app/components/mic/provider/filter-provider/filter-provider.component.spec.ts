import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProviderComponent } from './filter-provider.component';

describe('FilterProviderComponent', () => {
  let component: FilterProviderComponent;
  let fixture: ComponentFixture<FilterProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
