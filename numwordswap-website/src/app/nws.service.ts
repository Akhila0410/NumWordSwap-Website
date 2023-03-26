import { Injectable } from '@angular/core';
import { ApiException, INumWordSwap, INumWordSwapRequest, NumWordSwap, NumWordSwapClient, NumWordSwapRequest } from 'generated/NumWordSwapModels';

@Injectable({
  providedIn: 'root'
})
export class NwsService {

  constructor() { }
  nwsClient: NumWordSwapClient = new NumWordSwapClient();
  nwsRequest: NumWordSwapRequest = new NumWordSwapRequest({
    maxNumber: 0, sortedOrder: false
  });
  nwsResponse: NumWordSwap[] = [];

  getNwsResponse() {
    this.nwsClient.getSwappedNumWords(this.nwsRequest)
      .then(response => this.nwsResponse = response)
      .catch(error => {
        console.error(`Get Num Word Swaps exception: ${error}`);
      });
  }
}
