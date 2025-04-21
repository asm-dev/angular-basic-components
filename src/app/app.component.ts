import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, CounterComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
