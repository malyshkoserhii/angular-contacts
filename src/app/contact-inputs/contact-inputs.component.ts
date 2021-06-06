import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

export default interface IContact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-contact-inputs',
  templateUrl: './contact-inputs.component.html',
  styleUrls: ['./contact-inputs.component.scss'],
})
export class ContactInputsComponent implements OnInit {
  public form: FormGroup;
  public contactsList: IContact[] = [];
  public contactId: string = '';

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    });
  }

  onSubmitContact(): void {
    const formData = { ...this.form.value };
    this.form.reset();
  }

  onAddContact(): void {
    const formData = {
      id: uuidv4(),
      ...this.form.value,
    };

    if (
      formData.name === null ??
      formData.phone === null ??
      formData.email === null
    ) {
      console.log('return');

      return;
    }

    console.log(formData.name);

    this.contactsList.push(formData);
    this.form.reset();
    console.log(this.contactsList);
  }

  updatedListAfterRemovingContact($event): void {
    this.contactsList = $event;
  }
}
