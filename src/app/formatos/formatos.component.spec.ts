import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatosComponent } from './formatos.component';

describe('FormatosComponent', () => {
  let component: FormatosComponent;
  let fixture: ComponentFixture<FormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
