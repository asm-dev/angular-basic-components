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

  public addTask(): void {
    const trimmedTask: string = this.newItem.trim();

    if (trimmedTask) {
      this.itemList.push(trimmedTask);
      this.newItem = '';
    }
  }

  public removeTask(index: number): void {
    const isValidIndex: boolean = index >= 0 && index < this.itemList.length;

    if (isValidIndex) {
      this.itemList.splice(index, 1);
    }
  }
}
