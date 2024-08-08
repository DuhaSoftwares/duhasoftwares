import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSideNavComponent } from './super-side-nav.component';

describe('SuperSideNavComponent', () => {
  let component: SuperSideNavComponent;
  let fixture: ComponentFixture<SuperSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSideNavComponent]
    });
    fixture = TestBed.createComponent(SuperSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
