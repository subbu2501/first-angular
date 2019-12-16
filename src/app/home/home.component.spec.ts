import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-unit-test'`, () => {
    const fixture1 = TestBed.createComponent(HomeComponent);
    const comp1 = fixture1.componentInstance;
    expect(comp1.title).toEqual('ng-unit-test');
  });

  it('should render title', () => {
    const fixture1 = TestBed.createComponent(HomeComponent);
    fixture1.detectChanges();
    const compiled = fixture1.debugElement.nativeElement;
    expect(compiled.querySelector('span.title').textContent).toContain('ng-unit-test app is running!');
  });
});
