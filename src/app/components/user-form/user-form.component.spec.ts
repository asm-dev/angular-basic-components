import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, UserFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the user form component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user when all fields are filled', () => {
    component.firstName = 'Juan';
    component.lastName = 'Gómez';
    component.phone = '123456789';
    component.birthDate = '1990-01-01';

    component.addUser();

    expect(component.users.length).toBe(1);
    expect(component.users[0].firstName).toBe('Juan');
  });

  it('should not add a user if any field is missing', () => {
    component.firstName = 'Juan';
    component.lastName = '';
    component.phone = '123456789';
    component.birthDate = '1990-01-01';

    component.addUser();

    expect(component.users.length).toBe(0);
  });

  it('should clear the form after adding a user', () => {
    component.firstName = 'María';
    component.lastName = 'Del Pilar';
    component.phone = '987654321';
    component.birthDate = '2000-05-15';

    component.addUser();

    expect(component.firstName).toBe('');
    expect(component.lastName).toBe('');
    expect(component.phone).toBe('');
    expect(component.birthDate).toBe('');
  });
});
