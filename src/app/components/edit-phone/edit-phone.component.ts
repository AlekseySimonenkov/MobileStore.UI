import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MobilePhone } from 'src/app/models/mobilephone';
import { MobilephoneService } from 'src/app/services/mobilephone.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent implements OnInit {
@Input() phone?: MobilePhone;
@Output() phonesUpdated = new EventEmitter<MobilePhone[]>();
  constructor(private MobilephoneService: MobilephoneService) { }

  ngOnInit(): void {
  }
 updatePhone(phone:MobilePhone) {
  this.MobilephoneService
  .updatePhone(phone)
  .subscribe((phones: MobilePhone[]) => this.phonesUpdated.emit(phones));
 } 
 deletePhone(phone:MobilePhone) {
  this.MobilephoneService
  .deletePhone(phone)
  .subscribe((phones: MobilePhone[]) => this.phonesUpdated.emit(phones));
 } 
 createPhone(phone:MobilePhone) {
  this.MobilephoneService
  .createPhone(phone)
  .subscribe((phones: MobilePhone[]) => this.phonesUpdated.emit(phones));
 } 
}
