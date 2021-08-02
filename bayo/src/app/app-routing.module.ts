import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { OurBeerComponent } from './our-beer/our-beer.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
 {
   path:'',
   redirectTo:'home',
   pathMatch:'full'

 },
 {
  path:'home',
  component:HomeComponent
},
 {
  path:'aboutUs',
  component:AboutUsComponent
},
{
  path:'manufacturing',
  component:ManufacturingComponent
},
{
  path:'sale',
  component:SaleComponent
},
{
  path:'ourBeer',
  component:OurBeerComponent
},
{
  path:'contact',
  component:ContactComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
