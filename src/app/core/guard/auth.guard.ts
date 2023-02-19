import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  // Implement auth logic
  public canActivate(): boolean {
    return true;
  }
}
