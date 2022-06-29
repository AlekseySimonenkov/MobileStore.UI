import { Component } from '@angular/core';
import { MobilePhone } from './models/mobilephone';
import { MobilephoneService } from './services/mobilephone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileStore.UI';
  phones: MobilePhone[] = [];
  phoneToEdit?: MobilePhone;

  constructor(private mobilephoneService: MobilephoneService) {}

  ngOnInit() : void {
  this.mobilephoneService
  .getMobilePhones()
  .subscribe((result: MobilePhone[])=>(this.phones = result));
  }
updatePhoneList(phones: MobilePhone[]){
  this.phones = phones;
}
  initNewPhone() {
    this.phoneToEdit = new MobilePhone();
  }
  editPhone(phone: MobilePhone) {
    this.phoneToEdit = phone;
  }
}
