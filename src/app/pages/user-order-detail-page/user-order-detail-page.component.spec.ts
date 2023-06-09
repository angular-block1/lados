import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderDetailPageComponent } from './user-order-detail-page.component';

describe('UserOrderDetailPageComponent', () => {
  let component: UserOrderDetailPageComponent;
  let fixture: ComponentFixture<UserOrderDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOrderDetailPageComponent]
    });
    fixture = TestBed.createComponent(UserOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
