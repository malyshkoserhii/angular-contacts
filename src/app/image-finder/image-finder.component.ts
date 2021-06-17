import { Component, OnInit, OnChanges } from '@angular/core';

import { ImageFinderService } from '../../services/image-finder.service';
import { IHits } from '../../services/image-finder.service';

@Component({
  selector: 'app-image-finder',
  templateUrl: './image-finder.component.html',
  styleUrls: ['./image-finder.component.scss'],
})
export class ImageFinderComponent implements OnInit, OnChanges {
  images: IHits[] = [];
  query: string = '';

  constructor(private imageFinderService: ImageFinderService) {}

  ngOnChanges(): void {
    // console.log('images from ngOnChanges ImageFinderComponent', this.images);
  }

  ngOnInit(): void {}

  getImagesArr(images: IHits[]) {
    this.images = images;
    console.log('images from ImageFinderComponent', this.images);
  }

  onGetImages(query: string): void {
    // this.imageFinderService.getImages(query).subscribe((data) => {
    //   this.images = data.hits;
    // });
  }
}
