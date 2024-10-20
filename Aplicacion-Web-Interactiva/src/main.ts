import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Aquí es donde configuramos HttpClient
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', loadComponent: () => import('./app/cursos/cursos.component').then(m => m.CursosComponent) }
      ])
    )
  ]
}).catch(err => console.error(err));
