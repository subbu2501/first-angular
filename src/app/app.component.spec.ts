import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      // router.initialNavigation();
    });
  }));

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should show twitter logo', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#twitter-logo')).toBeTruthy();
  });

  it('username should be displayed', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.username').textContent === 'Welcome, !').toBeFalsy();
  });

  it('correct username should be displayed', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.username').textContent === `Welcome, ${comp.userName}!`).toBeTruthy();
  });

  it('should be navigated to home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('should be navigated to aboutus', fakeAsync(() => {
    const aboutuslink = fixture.debugElement.query(By.css('#lnkAboutUs'));
    aboutuslink.triggerEventHandler('click', {});
    tick(3000);
    fixture.detectChanges();
    expect(location.path()).toBe('/aboutus');
  }));
});
