import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedPageComponent } from './get-involved-page.component';

describe('GetInvolvedPageComponent', () => {
  let component: GetInvolvedPageComponent;
  let fixture: ComponentFixture<GetInvolvedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInvolvedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInvolvedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
