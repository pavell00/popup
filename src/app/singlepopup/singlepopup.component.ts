import { Component, OnInit, ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-singlepopup',
  templateUrl: './singlepopup.component.html',
  styleUrls: ['./singlepopup.component.css']
})
export class SinglepopupComponent implements OnInit {

  constructor() { }
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  ngOnInit() {
  }

  ClickButton(){
        this.popup1.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#A0DE4F",
            header: "Single Popup on a page",
            widthProsentage: 50,
            animationDuration: 1,
            confirmBtnContent: "Да", // The text on your confirm button
            cancleBtnContent: "Отмена", // the text on your cancel button
            }
    this.popup1.show(this.popup1.options);
  }

  ClickButton2(){
            this.popup2.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#4180ab",
            header: "Single Popup on a page",
            animation: 'fadeInLeft'}
    this.popup2.show(this.popup2.options);
  }

  ConfirmEvent(){
    console.log('ConfirmEvent');
    this.popup1.hide();
  }

  CancelEvent(){
    console.log('CancelEvent');
    this.popup1.hide(); 
  }

  ConfirmEvent2(){
    console.log('ConfirmEvent2');
    this.popup2.hide(); 
  }

  CancelEvent2(){
    console.log('CancelEvent2');
    this.popup2.hide(); 
  }
/*   showSample(){
    this.popup.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#4180ab",
            header: "Single Popup on a page"}
    this.popup.show(this.popup.options);
  }

  showSample2(){
     this.popup2.options = {
            cancleBtnClass: "Отмена", 
            confirmBtnClass: "Да",
            color: "#4180ab",
            header: "Second Popup on a popup",
            animation: "fadeInDown",
            animationDuration: 1,
            widthProsentage: 80}; 
    //this.popup.hide();
    this.popup2.show(this.popup2.options);
  } */

}
