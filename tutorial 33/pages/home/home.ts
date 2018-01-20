import { Component } from '@angular/core';



import {ProductDetailPage} from '../product-detail/product-detail';
import { ProductProvider } from '../../providers/product/product';
import { NavController, ModalController } from 'ionic-angular';
import {FilterModalPage} from '../filter-modal/filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts =[];
	

  constructor(private modalController:ModalController,private productService : ProductProvider,public navCtrl: NavController) {
  	//not part of lifecycle event
  	//1st event Fires
  	//initial variables
  	//Fires only onces in the life cycle of a page

 
  }
  openFilterModal(){
    let openFilterModal = this.modalController.create(FilterModalPage);
    openFilterModal.onDidDismiss((filterState)=>{
      this.productService.getProducts()
        .subscribe((allProduct)=> {
          let products = allProduct;
          if(filterState.maleSelected && filterState.femaleSelected){
            this.allProducts= products;
            return;
          }else if(!filterState.maleSelected && !filterState.femaleSelected){
            this.allProducts=[];
            return;
          }else if(filterState.maleSelected && !filterState.femaleSelected){
            this.allProducts = products.filter((product)=>{
              return product.gender !=="female";
            });
          }else {
            this.allProducts = products.filter((product)=>{
              return product.gender !=="male";
            });
          }
        });
      
    });
    openFilterModal.present();
    }
    

  
  ionViewDidLoad(){
  	//fires all internal setup
  	//one time heavy liftin
  	//fires only onces
  	this.productService.getProducts()
  		.subscribe((response) =>{this.allProducts = response});
  	

  }


  goToProductDetailPage(product){

    this.navCtrl.push(ProductDetailPage, {
      productDetails: product

    })
  }

}
