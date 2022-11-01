import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  isOpen$!: Subject<boolean>;

  constructor() {
    this.isOpen$ = new Subject();
  }

  open() {
    this.isOpen$.next(true);
  }

  close() {
    this.isOpen$.next(false);
  }
}
