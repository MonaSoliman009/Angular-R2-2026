import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/auth/login/login';
import { Order } from './components/order/order';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';
import { Vision } from './components/about-us/vision/vision';
import { Mission } from './components/about-us/mission/mission';
import { AppLayout } from './components/app-layout/app-layout';
import { ProductsList } from './components/products-list/products-list';
import { Details } from './components/products-list/details/details';
import { authGuard } from './guards/auth-guard';
import { AddProduct } from './components/add-product/add-product';

//first match wins
export const routes: Routes = [
  {
    path: '', component: AppLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home, title: 'Home page' },
      { path: 'order', loadComponent:()=>import('./components/order/order').then((m)=>m.Order), title: 'Order page',canActivate:[authGuard] },
      ///about-us/vision           /about-us/mission
      {
        path: 'about-us',
        component: AboutUs,
        title: 'About us page',
        children: [
          // {path:'',component:Vision},
          { path: '', redirectTo: 'vision', pathMatch: 'full' },
          { path: 'vision', component: Vision },
          { path: 'mission', component: Mission }
        ]
      },
      {path:'add-product',component:AddProduct},
      {path:'details/:id',component:Details},
      { path: 'auth', loadChildren:()=>import('./components/auth/auth-module').then((m)=>m.AuthModule) },

    ],

  },

  { path: '**', component: NotFound },//wild card route

];
