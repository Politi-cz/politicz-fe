import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({ template: '', standalone: true })
export class AbstractFormComponent {
  @Output() submitEvent = new EventEmitter();

  @Output() cancelEvent = new EventEmitter<void>();

  public submit(formGroup: FormGroup): void {
    if (formGroup.valid) {
      this.submitEvent.emit(formGroup.value);
    }
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }
}
