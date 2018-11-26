import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HeaderComponent } from './header/header.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { CatagorySidebarComponent } from './catagory-sidebar/catagory-sidebar.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HeaderComponent,
    PageHeadingComponent,
    CatagorySidebarComponent,
    ProductListingComponent,
    ProductItemComponent,
    HomePageComponent,
    ProductListPageComponent,
    NotfoundPageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'product',
        component: ProductListPageComponent
      }
      ,
      {
        path: '**',
        component: NotfoundPageComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
