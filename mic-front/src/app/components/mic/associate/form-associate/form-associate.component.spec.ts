import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssociateComponent } from './form-associate.component';

describe('FormAssociateComponent', () => {
  let component: FormAssociateComponent;
  let fixture: ComponentFixture<FormAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
