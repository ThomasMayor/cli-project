import { Routes } from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
/*
export const APP_ROUTES: Routes = [    
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },    
];*/

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'products', children: [
      { path : '', component: ProductListComponent},
      { path : ':id', component: ProductDetailComponent}
    ]    
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },    
];