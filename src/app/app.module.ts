import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { OurBeerComponent } from './our-beer/our-beer.component';
import { ContactComponent } from './contact/contact.component';
import { SaleComponent } from './sale/sale.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { TrunkatePipe } from './pipes/trunkate.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ManufacturingComponent,
    OurBeerComponent,
    ContactComponent,
    SaleComponent,
    FooterComponent,
    ViewDetailsComponent,
    TrunkatePipe,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })





  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

