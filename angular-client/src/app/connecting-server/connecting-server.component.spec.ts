import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingServerComponent } from './connecting-server.component';

describe('ConnectingServerComponent', () => {
  let component: ConnectingServerComponent;
  let fixture: ComponentFixture<ConnectingServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectingServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectingServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
