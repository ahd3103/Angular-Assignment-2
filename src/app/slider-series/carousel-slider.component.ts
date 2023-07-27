import { Component, OnInit } from '@angular/core';
import { IimageArray } from '../interface.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CarousalserviceService} from '../services/carousalservice.service'


@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  images: IimageArray[]=[];
 varouselForm: any;
  constructor(private _services:CarousalserviceService) { }
 
  ngOnInit(): void {
    this.varouselForm = new FormGroup({
      id: new FormControl(null),
      imgUrl: new FormControl("", [Validators.required]),
      imgCapt: new FormControl("", [Validators.required]),
    });
    this.images=this._services.images;
  }
  AddSlide() {
    this.images.push({id:(this.images.length)+1, imgUrl:this.varouselForm.value.imgUrl, imgCapt:this.varouselForm.value.imgCapt} );
    this.varouselForm.reset();
  }

  deletecarousal(id: number) {
    this.images = this.images.filter(item => item.id != id)
  }

}
