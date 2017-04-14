import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeadingComponent } from './contact-heading.component';

describe('ContactHeadingComponent', () => {
  let component: ContactHeadingComponent;
  let fixture: ComponentFixture<ContactHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
