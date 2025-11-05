import { Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { MainComponent } from './Components/main/main.component';

export const routes: Routes = [
  { path: 'server-down', component: ErrorComponent },
  { path: '', component: MainComponent },
];
