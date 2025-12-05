import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal<boolean>(true);

    constructor() {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme === 'dark');
        } else {
            // Default to dark
            this.setTheme(true);
        }
    }

    toggleTheme() {
        this.setTheme(!this.isDarkMode());
    }

    private setTheme(isDark: boolean) {
        this.isDarkMode.set(isDark);
        if (isDark) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    }
}
