import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInputsComponent } from './contact-inputs.component';

describe('ContactInputsComponent', () => {
  let component: ContactInputsComponent;
  let fixture: ComponentFixture<ContactInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
