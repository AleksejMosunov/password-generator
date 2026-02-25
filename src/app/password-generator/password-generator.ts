import { Component, signal } from '@angular/core';
import { PasswordService } from '../services/password-service';
import { FormsModule } from '@angular/forms'; // <-- обязательно
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-generator',
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGeneratorComponent {
  protected readonly password = signal('');
  protected length = 12;
  protected includeLowercase = true;
  protected includeUppercase = true;
  protected includeNumbers = true;
  protected includeSpecial = true;

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
        this.password.set(res.password);
      });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password()).then(
      () => {
        alert('Password copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  }
}
