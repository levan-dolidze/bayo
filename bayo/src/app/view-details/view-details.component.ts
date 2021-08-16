import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../modules/productPreview';
import { fade } from '../modules/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
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
  total = 0;
  mainPrice;
  isDisplayedSent = true;
  isDisplayedSentOrder = false;
  orderForm: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const detailInfo = localStorage.getItem('detailPreview');
    this.viewProductDetails = JSON.parse(detailInfo);
    this.total = this.viewProductDetails.price;
    this.mainPrice = this.viewProductDetails.price;
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
    this.total += this.mainPrice;

  }
  reductQty() {
    if (this.quantity > 1) {
      this.quantity--
      this.total -= this.mainPrice;

    }



  }

  inputHandleChange(event) {
    this.quantity = JSON.parse(event.target.value);
    this.total = this.mainPrice * this.quantity
  }
  isDisplayOrderPopUp() {
    this.isDisplayOrderPop = false;
    this.popUpShow = true;
    this.popUpShowOpa = true;

  }

  onSubmitOrder(forms) {
    this.http.post('https://bayocontact-a7f9d-default-rtdb.firebaseio.com/orderUserInfo.json', `${JSON.stringify(forms)}`).subscribe(responseData => {
      console.log(responseData);
     
    });
  }
  onSubmitProductInfo() {
    let updetedOrderStr = JSON.parse(localStorage.getItem('detailPreview'));
    this.http.post('https://bayocontact-a7f9d-default-rtdb.firebaseio.com/orderProductInfo.json', `${JSON.stringify(updetedOrderStr)}`).subscribe(responseData => {
      console.log(responseData);
      this.isDisplayedSent = false;
      this.isDisplayedSentOrder = true
      setTimeout(() => {
        this.router.navigate([''])
      }, 3000);
    });
  }
  closeOrderPopUp() {
    this.isDisplayOrderPop = true;
    this.popUpShow = false;
  }

  updateOrder() {
    let updetedOrderStr = JSON.parse(localStorage.getItem('detailPreview'));
    updetedOrderStr.totalPrice = this.total;
    updetedOrderStr.productQty = this.quantity;
    localStorage.setItem("detailPreview", JSON.stringify(updetedOrderStr));

  }
}
