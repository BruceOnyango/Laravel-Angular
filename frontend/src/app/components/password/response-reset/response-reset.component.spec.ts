import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseResetComponent } from './response-reset.component';

describe('ResponseResetComponent', () => {
  let component: ResponseResetComponent;
  let fixture: ComponentFixture<ResponseResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseResetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponseResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
