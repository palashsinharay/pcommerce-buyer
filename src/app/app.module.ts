import { ProductService } from './services/product.service';
import { CatagoriesService } from './services/catagories.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ErrorHandler } from '@angular/core';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { CatagorySidebarComponent } from './catagory-sidebar/catagory-sidebar.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProdImageGalComponent } from './prod-image-gal/prod-image-gal.component';
import { AppErrorHandler } from './common/app-error-handler';
import { StoreModule } from '@ngrx/store'; 
import { reducers } from './store/root.reducer';
import { OtherSellerComponent } from './other-seller/other-seller.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PageHeadingComponent,
    CatagorySidebarComponent,
    ProductListingComponent,
    HomePageComponent,
    ProductListPageComponent,
    NotfoundPageComponent,
    ProductDetailPageComponent,
    ProdImageGalComponent,
    OtherSellerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'product/details/:cat_id/:p_id',
        component: ProductDetailPageComponent
      },
      {
        path: 'product',
        component: ProductListPageComponent,
        children: [
          {
            path: 'category/:cat_id',
            component: ProductListingComponent
          }
        ]
      }
      ,
      {
        path: '**',
        component: NotfoundPageComponent
      }
    ])

  ],
  providers: [
    ProductService,
    CatagoriesService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
