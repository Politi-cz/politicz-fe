import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(): Observable<boolean> {
    //TODO solve permissions
    return this.authService.isAuthenticated$.pipe(
      map((e: boolean) => {
        return e;
      }),
      catchError(() => {
        this.router.navigate(['/news']);

        return of(false);
      }),
    );
  }
}
