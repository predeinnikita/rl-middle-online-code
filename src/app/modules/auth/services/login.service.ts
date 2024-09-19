import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { AuthState, LoginFormData } from '../models/login.model'
import { loginAction, logoutAction, resetAuthState } from '../store/auth.actions'
import {fromPromise} from 'rxjs/internal/observable/innerFrom';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable, switchMap} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(
        private authStore: Store<{ auth: AuthState }>,
    ) {
    }

    resetAuthState(): void {
        this.authStore.dispatch(resetAuthState())
    }

    login(loginData: LoginFormData): void {
        this.authStore.dispatch(loginAction({ data: loginData }))
    }

    //
    // getCryptoKey(): Observable<CryptoKey> {
    //   const algorithm = {
    //     name: 'RSA-OAEP',
    //   };
    //   const crypto = window.crypto.subtle;
    //   return fromPromise(crypto.generateKey(algorithm, true, []));
    // }
    //
    // encryptString(data: string, key: CryptoKey): string {
    //   const algorithm = {
    //     name: 'RSA-OAEP',
    //   }
    //
    //   fromPromise(window.crypto.subtle.encrypt(
    //     algorithm,
    //     key,
    //     new TextEncoder().encode(data)
    //   ))
    // }

    logout(): void {
        this.authStore.dispatch(logoutAction())
    }
}
