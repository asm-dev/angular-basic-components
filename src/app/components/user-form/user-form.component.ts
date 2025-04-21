import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public firstName: string = '';
  public lastName: string = '';
  public phone: string = '';
  public birthDate: string = '';

  public users: User[] = [];

  public addUser(): void {
    if (this.firstName && this.lastName && this.phone && this.birthDate) {
      this.users.push({
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        birthDate: this.birthDate,
      });

      this.firstName = '';
      this.lastName = '';
      this.phone = '';
      this.birthDate = '';
    }
  }
}
