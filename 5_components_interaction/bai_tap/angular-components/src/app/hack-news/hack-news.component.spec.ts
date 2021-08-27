import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackNewsComponent } from './hack-news.component';

describe('HackNewsComponent', () => {
  let component: HackNewsComponent;
  let fixture: ComponentFixture<HackNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
