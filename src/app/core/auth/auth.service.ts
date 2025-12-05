import { Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userName = signal<string | null>(null);

    constructor(private oauthService: OAuthService) {
        this.configure();
    }

    private configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            if (this.oauthService.hasValidAccessToken()) {
                this.loadUserProfile();
            }
        });
    }

    login() {
        this.oauthService.initLoginFlow();
    }

    logout() {
        this.oauthService.logOut();
        this.userName.set(null);
    }

    get isLoggedIn(): boolean {
        return this.oauthService.hasValidAccessToken();
    }

    private loadUserProfile() {
        const claims = this.oauthService.getIdentityClaims() as any;
        if (claims) {
            this.userName.set(claims['name'] || claims['given_name']);
        }
    }
}
