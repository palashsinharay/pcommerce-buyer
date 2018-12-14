import { EventEmiterService } from './services/event-emiter.service';
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
import { OtherSellerComponent } from './other-seller/other-seller.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { FeaturedProductService } from './services/featured-product.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutOverviewComponent } from './checkout-overview/checkout-overview.component';
import { CartlistOverviewComponent } from './cartlist-overview/cartlist-overview.component';



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
    OtherSellerComponent,
    LoginPageComponent,
    FeaturedProductComponent,
    CartPageComponent,
    CartlistComponent,
    OrderSummaryComponent,
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutPaymentComponent,
    CheckoutOverviewComponent,
    CartlistOverviewComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'admin',
        component: LoginPageComponent
      },
      {
        path : 'cart',
        component : CartPageComponent
      },
      {
        path : 'checkout',
        component : CheckoutComponent,
        children: [
          {
            path : 'address',
            component : CheckoutAddressComponent
          },
          {
            path : 'payment',
            component : CheckoutPaymentComponent
          },
          {
            path : 'overview',
            component : CheckoutOverviewComponent
          }
        ]
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
      },
      {
        path: '**',
        component: NotfoundPageComponent
      }
    ])

  ],
  providers: [
    ProductService,
    CatagoriesService,
    EventEmiterService,
    FeaturedProductService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
