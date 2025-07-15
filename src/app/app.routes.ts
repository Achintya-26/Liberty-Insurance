import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnableProductComponent } from './components/enable-product/enable-product.component';
import { CreateBlockComponent } from './components/create-block/create-block.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'enable-product', component: EnableProductComponent },
  { path: 'create-block', component: CreateBlockComponent },
  { path: '**', redirectTo: '/login' }
];
