import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDisplayComponent } from './second-display.component';

describe('SecondDisplayComponent', () => {
  let component: SecondDisplayComponent;
  let fixture: ComponentFixture<SecondDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
