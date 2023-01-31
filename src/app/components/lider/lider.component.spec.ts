import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderComponent } from './lider.component';

describe('LiderComponent', () => {
  let component: LiderComponent;
  let fixture: ComponentFixture<LiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
