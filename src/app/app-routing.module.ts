import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'seller',
    //     component: SellerComponent
    //   },
    //   {
    //     path: 'seller/:id',
    //     component: SellerComponent
    //   },
    //   {
    //     path: 'seller/product/:id',
    //     component: ProductComponent
    //   }
    // ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
