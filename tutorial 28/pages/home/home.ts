import { Component } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { ProductProvider } from '../../providers/product/product';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private productService : ProductProvider,private http: HttpClient,public navCtrl: NavController) {
  	//not part of lifecycle event
  	//1st event Fires
  	//initial variables
  	//Fires only onces in the life cycle of a page

 
  }

  ionViewCanEnter(){
  	//boolean value
  	//can enter a page??
  	//permission check
  	//fires every time page is navigated
  }
  ionViewDidLoad(){
  	//fires all internal setup
  	//one time heavy lifting
  	//fires only onces
  	this.productService.getProducts()
  		.subscribe(response => console.log(response));
  	

  }
  ionViewWillEnter(){
  	//signals the start of the transition to bring the page into view
  	//fires every time
  	//Refreshing data
  }
  ionViewDidEnter(){
  	//100% active page
  	//page in full view
  	//finish all work
  	//fires every time

  }
  ionViewCanLeave(){
  	//can enter 
  	//boolean value
  	//user can leave or not??
  	//fires every time

  }
  ionViewWillLeave(){
  	//opst of will enter
  	//remove the page form the view
  	//prefetch data for next page
  	//fires every time 

  }
  ionViewDidLeave(){
  	//page no longer visibles
  	//cancel all view update
  	//fires every time

  }
  ionViewWillUnload(){
  	//unloaded and removed page form memory
  	//fires only onces and the page is destroyed


  }

}
