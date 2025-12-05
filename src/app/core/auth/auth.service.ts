import { Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userName = signal<string | null>(null);
    isLoggedIn = signal<boolean>(false);

    constructor(private oauthService: OAuthService) {
        console.log('AuthService initialized');
        this.configure();
    }

    private configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.setupAutomaticSilentRefresh();

        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            this.updateState();
        });

        // Listen to events to update state
        this.oauthService.events.subscribe(e => {
            console.log('OAuth Event:', e.type);
            this.updateState();
        });
    }

    private updateState() {
        const hasToken = this.oauthService.hasValidAccessToken();
        this.isLoggedIn.set(hasToken);

        if (hasToken) {
            this.loadUserProfile();
        } else {
            this.userName.set(null);
        }
    }

    login() {
        this.oauthService.initLoginFlow();
    }

    logout() {
        this.oauthService.logOut();
        this.updateState();
    }

    private loadUserProfile() {
        const claims = this.oauthService.getIdentityClaims() as any;
        if (claims) {
            this.userName.set(claims['name'] || claims['given_name']);
        }
    }
}
