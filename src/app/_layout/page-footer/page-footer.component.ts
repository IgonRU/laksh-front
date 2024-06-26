import { Component } from '@angular/core';
import {LakshPhoneNumberComponent} from "../../_components/phone-number/phone-number.component";
import {LakshEmailAddressComponent} from "../../_components/email-address/email-address.component";

@Component({
  selector: 'laksh-page-footer',
  standalone: true,
  imports: [
    LakshPhoneNumberComponent,
    LakshEmailAddressComponent
  ],
  templateUrl: './page-footer.component.html'
})
export class LakshPageFooterComponent {

}
