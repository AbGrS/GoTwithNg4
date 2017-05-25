import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrionComponentComponent } from './tyrion-component.component';

describe('TyrionComponentComponent', () => {
  let component: TyrionComponentComponent;
  let fixture: ComponentFixture<TyrionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyrionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyrionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
