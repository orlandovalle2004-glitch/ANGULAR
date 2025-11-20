import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCredito1Component } from './tarjeta-credito1.component';

describe('TarjetaCredito1Component', () => {
  let component: TarjetaCredito1Component;
  let fixture: ComponentFixture<TarjetaCredito1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCredito1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCredito1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
