import { Component } from '@angular/core';



import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
	public productDetails ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.productDetails = this.navParams.get("productDetails");
  	
  }

  ionViewDidLoad() {
    
  }

}
