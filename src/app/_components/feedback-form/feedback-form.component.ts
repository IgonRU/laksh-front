import { Component } from '@angular/core';
import { FeedbackFormService } from './feedback-form.service';
import { IgonHttpResponse } from '@igon/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'laksh-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  formData = {
    name: '',
    phone: '',
    request: ''
  };

  phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  phoneError = '';
  phoneTouched = false;

  onPhoneKeyPress(event: KeyboardEvent): void {
    // Разрешаем только цифры, пробелы, тире, плюс, скобки и управляющие клавиши
    const allowedChars = /[\d\s\-\+\(\)]/;
    const controlKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    
    if (!allowedChars.test(event.key) && !controlKeys.includes(event.key)) {
      event.preventDefault();
      return;
    }
  }

  onPhoneInput(event: any): void {
    let value = event.target.value;
    
    // Ограничиваем ввод только цифрами, скобками, пробелами, дефисами и плюсом
    value = value.replace(/[^\d\s\(\)\-\+]/g, '');
    
    // Убираем все символы кроме цифр для форматирования
    let digits = value.replace(/\D/g, '');
    
    if (digits.length > 0) {
      // Форматируем номер телефона
      if (digits.length <= 1) {
        value = '+7';
      } else if (digits.length <= 4) {
        value = `+7 (${digits.slice(1, 4)}`;
      } else if (digits.length <= 7) {
        value = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}`;
      } else if (digits.length <= 9) {
        value = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}`;
      } else {
        value = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
      }
    }
    
    this.formData.phone = value;
    
    // Очищаем ошибку при вводе
    if (this.phoneError) {
      this.phoneError = '';
    }
  }

  onPhoneBlur(): void {
    this.phoneTouched = true;
    this.validatePhone();
  }

  validatePhone(): void {
    if (!this.phoneTouched) {
      this.phoneError = '';
      return;
    }
    
    if (this.formData.phone && !this.phonePattern.test(this.formData.phone)) {
      this.phoneError = 'Введите корректный номер телефона';
    } else {
      this.phoneError = '';
    }
  }

  constructor(private feedbackService: FeedbackFormService) {}

  onSubmit(): void {
    // Помечаем все поля как "тронутые" для показа ошибок
    this.phoneTouched = true;
    
    if (!this.validateForm()) return;

    this.feedbackService
      .submitFeedback({
        name: this.formData.name.trim(),
        request: this.formData.request.trim(),
        phone: this.formData.phone?.trim() || undefined,
      })
      .subscribe({
        next: (resp: IgonHttpResponse) => {
          const message = (resp?.data as any)?.message || 'Спасибо! Мы свяжемся с вами.';
          alert(message);
          this.formData = { name: '', phone: '', request: '' };
          this.phoneTouched = false;
          this.phoneError = '';
        },
        error: (err) => {
          const message = err?.data?.message || 'Ошибка при отправке формы. Попробуйте позже.';
          alert(message);
        },
      });
  }

  private validateForm(): boolean {
    this.validatePhone();
    
    if (!this.formData.name.trim()) {
      return false;
    }
    
    if (this.phoneError) {
      return false;
    }
    
    if (!this.formData.request.trim()) {
      return false;
    }
    
    return true;
  }
}
