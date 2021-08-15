import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../modules/productPreview';
import { fade } from '../modules/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  quantity = 1;
  isDisplayOrderPop = true;
  popUpShow = false;
  popUpShowOpa = false;


  orderForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    const detailInfo = localStorage.getItem('detailPreview');
    this.viewProductDetails = JSON.parse(detailInfo);
    console.log(detailInfo)
    this.orderForm = new FormGroup({
      userId: new FormControl(null, [Validators.required]),
      userName: new FormControl(null, [Validators.required]),
      userLastname: new FormControl(null, [Validators.required]),
      userMob: new FormControl(null, [Validators.required]),
      userEmail: new FormControl(null, [Validators.required]),
      userAddress: new FormControl(null, [Validators.required])
    })


  }
  //   deliveryTerms(){
  //     this.showDeliveryTerms=!this.showDeliveryTerms
  //   }
  // }

  increaseQty() {
    this.quantity++
  }
  reductQty() {
    if (this.quantity > 1)
      this.quantity--
  }
  inputHandleChange(event) {
    this.quantity = event.target.value

  }
  isDisplayOrderPopUp() {
    this.isDisplayOrderPop = false;
    this.popUpShow = true;
    this.popUpShowOpa = true;

  }

  onSubmitOrder(forms) {
    console.log(forms)
  }
  closeOrderPopUp(){
    this.isDisplayOrderPop = true;
this.popUpShow=false;
  }
}
