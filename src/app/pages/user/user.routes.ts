import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
