import { PhoneBookDetailPage } from './../phone-book-detail/phone-book-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

    //probpoty
    contactArray = [{name: 'nus',   telephone: '  0822697162',  ImageUrl: 'assets/imgs/oef1.jpg'},
                    {name: 'baa',   telephone: '  0935951819',  ImageUrl: 'assets/imgs/oef2.jpg'},
                    {name: 'faa',   telephone: '  0916466030',  ImageUrl: 'assets/imgs/oef3.jpg'},
                    {name: 'vee',   telephone: '  0864845806',  ImageUrl: 'assets/imgs/oef4.jpg'},
                    {name: 'nusA',  telephone: '  0660080386',  ImageUrl: 'assets/imgs/oef5.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }



}//end
