import { Component, OnDestroy } from '@angular/core';
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
export class FeedbackFormComponent implements OnDestroy {
  formData = {
    name: '',
    phone: '',
    request: ''
  };

  phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  phoneError = '';
  phoneTouched = false;

  nameError = '';
  nameTouched = false;
  requestError = '';
  requestTouched = false;

  showSuccessOverlay = false;
  private overlayTimerId: any = null;
  private clearFormTimeoutId: any = null;
  readonly successMessage = '<h3>Благодарим за обращение!</h3><p>Свяжемся с Вами в ближайшее время.</p>';
  errorMessage = '';
  overlayFadingOut = false;
  private readonly overlayFadeInMs = 700;
  private readonly overlayFadeOutMs = 1000;

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

  onNameBlur(): void {
    this.nameTouched = true;
    this.validateName();
  }

  onRequestBlur(): void {
    this.requestTouched = true;
    this.validateRequest();
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

  validateName(): void {
    if (!this.nameTouched) {
      this.nameError = '';
      return;
    }
    if (!this.formData.name.trim()) {
      this.nameError = 'Обязательное поле';
    } else {
      this.nameError = '';
    }
  }

  validateRequest(): void {
    if (!this.requestTouched) {
      this.requestError = '';
      return;
    }
    if (!this.formData.request.trim()) {
      this.requestError = 'Обязательное поле';
    } else {
      this.requestError = '';
    }
  }

  constructor(private feedbackService: FeedbackFormService) {}

  onSubmit(): void {
    // Помечаем все поля как "тронутые" для показа ошибок
    this.phoneTouched = true;
    this.nameTouched = true;
    this.requestTouched = true;
    
    if (!this.validateForm()) return;

    this.feedbackService
      .submitFeedback({
        name: this.formData.name.trim(),
        request: this.formData.request.trim(),
        phone: this.formData.phone?.trim() || undefined,
      })
      .subscribe({
        next: (resp: IgonHttpResponse) => {
          this.showSuccessMessage();
          if (this.clearFormTimeoutId) {
            clearTimeout(this.clearFormTimeoutId);
            this.clearFormTimeoutId = null;
          }
          this.clearFormTimeoutId = setTimeout(() => {
            this.formData = { name: '', phone: '', request: '' };
            this.phoneTouched = false;
            this.phoneError = '';
            this.errorMessage = '';
            this.nameTouched = false;
            this.nameError = '';
            this.requestTouched = false;
            this.requestError = '';
          }, this.overlayFadeInMs);
        },
        error: (err) => {
          const message = err?.data?.message || 'Ошибка при отправке формы. Попробуйте позже.';
          this.errorMessage = message;
        },
      });
  }

  private validateForm(): boolean {
    this.validatePhone();
    this.validateName();
    this.validateRequest();
    
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

  private showSuccessMessage(): void {
    this.overlayFadingOut = false;
    this.showSuccessOverlay = true;
    // Небольшая задержка, чтобы Angular успел отрендерить DOM и применить класс .visible
    setTimeout(() => {
      this.startOverlayTimer();
    });
  }

  hideOverlay(): void {
    this.overlayFadingOut = true;
    setTimeout(() => {
      this.showSuccessOverlay = false;
      if (this.overlayTimerId) {
        clearTimeout(this.overlayTimerId);
        this.overlayTimerId = null;
      }
      this.overlayFadingOut = false;
    }, this.overlayFadeOutMs);
  }

  private startOverlayTimer(): void {
    if (this.overlayTimerId) {
      clearTimeout(this.overlayTimerId);
      this.overlayTimerId = null;
    }
    this.overlayTimerId = setTimeout(() => {
      this.hideOverlay();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.overlayTimerId) {
      clearTimeout(this.overlayTimerId);
      this.overlayTimerId = null;
    }
    if (this.clearFormTimeoutId) {
      clearTimeout(this.clearFormTimeoutId);
      this.clearFormTimeoutId = null;
    }
  }
}
