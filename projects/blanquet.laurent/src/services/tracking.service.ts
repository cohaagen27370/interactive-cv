import {inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  http = inject(HttpClient);

  track() {
    return this.http.post('https://cohaagen.proxydns.com/services/v1/track', {});
  }

}
