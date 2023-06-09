import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListsPageComponent } from './order-lists-page.component';

describe('OrderListsPageComponent', () => {
  let component: OrderListsPageComponent;
  let fixture: ComponentFixture<OrderListsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListsPageComponent]
    });
    fixture = TestBed.createComponent(OrderListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
