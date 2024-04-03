import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3UserDetailsComponent } from './component3-user-details.component';

describe('Component3UserDetailsComponent', () => {
  let component: Component3UserDetailsComponent;
  let fixture: ComponentFixture<Component3UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component3UserDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component3UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
