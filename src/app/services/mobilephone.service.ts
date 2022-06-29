import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MobilePhone } from '../models/mobilephone';

@Injectable({
  providedIn: 'root'
})
export class MobilephoneService {
 private url = "MobilePhone";

  constructor(private http: HttpClient) { }

  public getMobilePhones() : Observable<MobilePhone[]> {

    return this.http.get<MobilePhone[]>(`${environment.apiUrl}/${this.url}`);

  }
  public updatePhone(phone: MobilePhone) : Observable<MobilePhone[]> {

    return this.http.put<MobilePhone[]>(`${environment.apiUrl}/${this.url}`,
     phone);

  }
  public createPhone(phone: MobilePhone) : Observable<MobilePhone[]> {

    return this.http.post<MobilePhone[]>(`${environment.apiUrl}/${this.url}`,
     phone);

  }
  public deletePhone(phone: MobilePhone) : Observable<MobilePhone[]> {

    return this.http.delete<MobilePhone[]>(`${environment.apiUrl}/${this.url}/${phone.id}`);

  }
}
