import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../modules/productPreview';

@Component({
  selector: 'app-our-beer',
  templateUrl: './our-beer.component.html',
  styleUrls: ['./our-beer.component.css']
})

export class OurBeerComponent implements OnInit {
  productsBeer:Array <ProductModel>=[{
    id: 1,
    title: 'beer',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 6,
    totalPrice: 0,
    productQty: 0
  },{
    id: 2,
    title: "try",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 6,
    totalPrice: 0,
    productQty: 0
  }
]
  constructor() { }

  ngOnInit(): void {
    
  }

}
