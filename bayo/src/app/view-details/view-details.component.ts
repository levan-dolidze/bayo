import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../modules/productPreview';
import { fade } from '../modules/animations';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  animations: [
    fade
  ]
})
export class ViewDetailsComponent implements OnInit {
  viewProductDetails: Array<ProductModel>
  quantity=1;
  constructor() { }

  ngOnInit(): void {
    const detailInfo = localStorage.getItem('detailPreview');
    this.viewProductDetails = JSON.parse(detailInfo);
    console.log(detailInfo)

  }
  //   deliveryTerms(){
  //     this.showDeliveryTerms=!this.showDeliveryTerms
  //   }
  // }

  increaseQty(){
    this.quantity++
  }
  reductQty(){
    if(this.quantity>1)
    this.quantity--
  }
  inputHandleChange(event){
    this.quantity=event.target.value

  }
}
