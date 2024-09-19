import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUser } from '../../modules/auth/store/auth.selectors';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(getCurrentUser).pipe(
    map(user => !!user),
    tap((isAuth) => {
      if (!isAuth) {
        router.navigate(['login']);
      }
    })
  )
};
