import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { fdaReducer } from './features/fda-enforcement/store/fda.reducer';
import { FdaEffects } from './features/fda-enforcement/store/fda.effects';

import { cartReducer } from './core/store/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideOAuthClient({
      resourceServer: {
        allowedUrls: ['https://demo.duendesoftware.com'],
        sendAccessToken: true
      }
    }),
    provideStore({ fda: fdaReducer, cart: cartReducer }),
    provideEffects([FdaEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
