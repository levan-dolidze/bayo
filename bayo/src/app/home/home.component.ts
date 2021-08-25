
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  searchInput: FormGroup;
  parced;
  images = ["assets/caroucel1.jpg", 
  "assets/caroucel2.jpg", 
  "assets/caroucel3.jpg"];
  title='';
  productPreview: Array<ProductModel> = [{
    id: 1,
    title: "TRY",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 6,
    totalPrice: 0,
    productQty: 0,
    deliveryFee:false
  },
  {
    id: 2,
    title: "AVIATOR",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 7,
    totalPrice: 0,
    productQty: 0,
    deliveryFee:false
  },
  {
    id: 3,
    title: "IPA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 7,
    totalPrice: 0,
    productQty: 0,
    deliveryFee:false
  },
  {
    id: 4,
    title: "IPA TATTOO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    technology: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat impedit, maxime voluptatem id blanditiis! Pariatur aliquid, dicta sapiente quibusdam laudantium totam voluptate reiciendis nemo ipsa impedit amet ducimus aut!",
    image: "assets/try.jpg",
    price: 8,
    totalPrice: 0,
    productQty: 0,
    deliveryFee:false
  }

  ]


  constructor(private router: Router) {
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.searchInput = new FormGroup({
      search: new FormControl(null, Validators.required)
    })



  }
 
  detailPreview(i: number) {
    this.parced = JSON.stringify(this.productPreview[i]);
    localStorage.setItem('detailPreview', this.parced);
    this.router.navigate(['view-details']);

  }


  
  // searchItems(searchValue) {

  //   const getAllTitle = () => {
  //     const serchedItems = this.productPreview.map((item) => {
  //       return item.title
  //     })
  //     return serchedItems
  //   }
  //   const titles = getAllTitle()


  //   const getFiltredTitle = (data) => {

  //     const filtredTitles = data.filter((items) => {
  //       return (items.toLowerCase().includes(searchValue.value.search)) || (items.toUpperCase().includes(searchValue.value.search));
  //     })
  //     return filtredTitles
  //   }
  //   const result = getFiltredTitle(titles)

  //   const resultTitle = (data) => {

  //     if (data.length > 0) {

  //       alert("found");
        
  //     } 
  //     else {
  //       alert('not found')
  //     }
  //   }
  //   resultTitle(result);




  // }

  
}

