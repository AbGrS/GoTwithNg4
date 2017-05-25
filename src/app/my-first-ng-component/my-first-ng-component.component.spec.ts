import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstNgComponentComponent } from './my-first-ng-component.component';

describe('MyFirstNgComponentComponent', () => {
  let component: MyFirstNgComponentComponent;
  let fixture: ComponentFixture<MyFirstNgComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstNgComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstNgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
