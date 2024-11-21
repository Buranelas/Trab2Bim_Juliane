import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(CommonModule, FormsModule),
  ],
};
