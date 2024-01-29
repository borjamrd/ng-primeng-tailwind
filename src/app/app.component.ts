import { Component, Inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ButtonModule,
    MultiSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  primeTheme = 'lara-light-blue';
  darkMode = signal<{ dark: boolean; prime: string }>({
    dark: true,
    prime: this.primeTheme,
  });
  theme = signal<string>(this.primeTheme);

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCities: City[] = [
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
  ];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme() {
    if (this.darkMode().dark === true) {
      this.darkMode.set({
        dark: false,
        prime: 'lara-dark-blue',
      });
    } else {
      this.darkMode.set({
        dark: true,
        prime: 'lara-light-blue',
      });
    }
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = this.darkMode().prime + '.css';
    }
    document.body.classList.toggle('dark');
  }
}
