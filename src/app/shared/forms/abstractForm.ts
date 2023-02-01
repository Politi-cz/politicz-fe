import { FormGroup } from '@angular/forms';
import { Output, EventEmitter, Component } from '@angular/core';

@Component({ template: '' })
export class AbstractFormComponent {
  @Output() submitEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  public submit(formGroup: FormGroup) {
    if (formGroup.valid) {
      this.submitEvent.emit(formGroup.value);
    }
  }

  public cancel() {
    this.cancelEvent.emit();
  }
}
