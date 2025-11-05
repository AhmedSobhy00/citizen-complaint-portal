import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { errorInterceptor } from './Services/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient( withInterceptors([errorInterceptor])) ,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
