import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public count: number = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  public reset(): void {
    this.count = 0;
  }
}
