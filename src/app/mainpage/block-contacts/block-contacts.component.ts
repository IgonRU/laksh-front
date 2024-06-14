import { Component } from '@angular/core';
import {LakshPhoneNumberComponent} from "../../_components/phone-number/phone-number.component";
import {LakshEmailAddressComponent} from "../../_components/email-address/email-address.component";

@Component({
  selector: 'laksh-block-contacts',
  standalone: true,
  imports: [
    LakshPhoneNumberComponent,
    LakshEmailAddressComponent
  ],
  templateUrl: './block-contacts.component.html'
})
export class LakshBlockContactsComponent {

}
