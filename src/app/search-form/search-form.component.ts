import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageFinderService } from '../../services/image-finder.service';
import { IHits } from '../../services/image-finder.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  public form: FormGroup;
  images: IHits[] = [];
  @Output() imagesEvent = new EventEmitter<IHits[]>();
  constructor(private imageFinderService: ImageFinderService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchImage: new FormControl(null, []),
    });
  }

  onSubmit() {
    const query = this.form.value.searchImage;
    this.imageFinderService.getImages(query).subscribe((data) => {
      this.imagesEvent.emit(data.hits);
    });
  }
}
