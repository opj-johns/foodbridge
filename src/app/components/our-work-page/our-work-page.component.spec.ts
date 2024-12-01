import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkPageComponent } from './our-work-page.component';

describe('OurWorkPageComponent', () => {
  let component: OurWorkPageComponent;
  let fixture: ComponentFixture<OurWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorkPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
