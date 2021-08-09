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
  constructor() { }

  ngOnInit(): void {
    const kk = localStorage.getItem('detailPreview');
    this.viewProductDetails = JSON.parse(kk);
console.log(kk)

  }

}

