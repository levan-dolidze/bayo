
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from '../modules/animations';
import { ProductModel } from '../modules/productPreview';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade
  ]
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  parced;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/400`);
  productPreview: Array<ProductModel> = [{
    id: 1,
    title: "beer TRY limited edition",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 6,
    totalPrice:0,
    productQty:0
  },
  {
    id: 2,
    title: "beer TRY",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 7,
    totalPrice:0,
    productQty:0
  },
  {
    id: 3,
    title: "beer TRY",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 7,
    totalPrice:0,
    productQty:0
  },
  {
    id: 4,
    title: "beer TRY",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 8,
    totalPrice:0,
    productQty:0
  }

  ]


  constructor(private router:Router) {
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }

  ngOnInit(): void {


  }
  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
  // }

  detailPreview(i: number) {
    this.parced = JSON.stringify(this.productPreview[i]);
    localStorage.setItem('detailPreview', this.parced);
this.router.navigate(['view-details']);

  }



}
