import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the item list component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a trimmed task to the list', () => {
    component.newItem = '  Task 1  ';
    component.addTask();
    expect(component.itemList.length).toBe(1);
    expect(component.itemList[0]).toBe('Task 1');
  });

  it('should not add empty tasks', () => {
    component.newItem = '   ';
    component.addTask();
    expect(component.itemList.length).toBe(0);
  });

  it('should remove task by index', () => {
    component.itemList = ['Task A', 'Task B'];
    component.removeTask(0);
    expect(component.itemList).toEqual(['Task B']);
  });

  it('should not remove if index is invalid', () => {
    component.itemList = ['Task A'];
    component.removeTask(5);
    expect(component.itemList.length).toBe(1);
  });
});
