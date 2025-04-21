import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  public itemList: string[] = [];
  public newItem: string = '';

  public addItem(): void {
    const trimmedItem: string = this.newItem.trim();

    if (trimmedItem) {
      this.itemList.push(trimmedItem);
      this.newItem = '';
    }
  }

  public removeItem(index: number): void {
    const itemIndex: boolean = index >= 0 && index < this.itemList.length;

    if (itemIndex) {
      this.itemList.splice(index, 1);
    }
  }
}
