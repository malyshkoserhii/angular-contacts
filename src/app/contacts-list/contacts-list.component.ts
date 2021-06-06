import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import IContact from '../contact-inputs/contact-inputs.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  @Input() contactsList: IContact[] = [];
  @Output() contactIdEvent = new EventEmitter<string>();
  @Output() updatedContactListEvent = new EventEmitter<IContact[]>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteContact(contactId: string): void {
    const updatedContactList: IContact[] = this.contactsList.filter(
      (contact) => contact.id !== contactId
    );
    this.updatedContactListEvent.emit(updatedContactList);
  }
}
