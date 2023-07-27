import { Injectable } from '@angular/core';
import { IimageArray } from '../interface.model';

@Injectable({
  providedIn: 'root'
})
export class CarousalserviceService {
  images: IimageArray[] = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/id/1/800/400',
      imgCapt: 'Hard Work With New Logic',
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/id/2/800/400',
      imgCapt: 'Take a coffe Break to Refresh Mind'
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/id/4/800/400',
      imgCapt: 'Make a Note Of New Lerning'
    },
  ];
  constructor() { }


}
