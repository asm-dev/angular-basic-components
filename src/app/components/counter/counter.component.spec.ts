import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the counter component', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should not decrement below zero', () => {
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should reset the counter', () => {
    component.increment();
    component.increment();
    component.reset();
    expect(component.count).toBe(0);
  });
});
