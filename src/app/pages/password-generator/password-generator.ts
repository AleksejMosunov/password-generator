import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from '../../models/password.model';
import { PasswordService } from '../../services/password-service';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGeneratorComponent {
  protected readonly password = signal<Password | null>(null);
  protected length = 12;
  protected includeLowercase = true;
  protected includeUppercase = true;
  protected includeNumbers = true;
  protected includeSpecial = true;

  protected readonly title = 'Password Generator';

  constructor(private passwordService: PasswordService) {}

  protected generate() {
    this.passwordService
      .generatePassword(
        this.length,
        this.includeLowercase,
        this.includeUppercase,
        this.includeNumbers,
        this.includeSpecial,
      )
      .subscribe((res) => {
        const newPassword: Password = {
          id: Date.now(),
          value: res.password,
          cratedAt: new Date(),
        };

        this.password.set(newPassword);
        console.log('Generated password:', newPassword);
      });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password()?.value || '').then(
      () => {
        alert('Password copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  }
}
