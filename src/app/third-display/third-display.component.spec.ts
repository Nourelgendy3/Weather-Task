import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDisplayComponent } from './third-display.component';

describe('ThirdDisplayComponent', () => {
  let component: ThirdDisplayComponent;
  let fixture: ComponentFixture<ThirdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
