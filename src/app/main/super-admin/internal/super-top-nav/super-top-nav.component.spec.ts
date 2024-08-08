import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTopNavComponent } from './super-top-nav.component';

describe('SuperTopNavComponent', () => {
  let component: SuperTopNavComponent;
  let fixture: ComponentFixture<SuperTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperTopNavComponent]
    });
    fixture = TestBed.createComponent(SuperTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
