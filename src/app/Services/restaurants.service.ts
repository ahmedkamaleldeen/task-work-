import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {RequestOptions} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private httpRequest: HttpClient) {}
  getBranches() {
    // let options = new RequestOptions({ headers: headers });

    return this.httpRequest.get(
      'https://backend.eizymenu.com/api/home/branch-types',
      {
        headers: {
          // 'Postman-Token': '',
          // Host: '',
          // 'User-Agent': 'PostmanRuntime/7.29.0',
          // Accept: '*/*',
          // 'Accept-Encoding': 'gzip, deflate, br',
          // Connection: 'keep-alive',
          "Authorization":"Bearer"
        },
      }
    );
  }
}
