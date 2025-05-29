import {inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IpifyResponse} from '../types';
import {lastValueFrom, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  http = inject(HttpClient);

  track(ip: string) {
    return this.http.post('https://cohaagen.proxydns.com/services/v1/track', {ip});
  }

  getPublicIpAddress() {
    return this.http.get<IpifyResponse>('https://api.ipify.org?format=json').pipe(
      map(response => response.ip)
    );
  }

}
