import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2UserCardComponent } from './component2-user-card.component';

describe('Component2UserCardComponent', () => {
  let component: Component2UserCardComponent;
  let fixture: ComponentFixture<Component2UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component2UserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component2UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
