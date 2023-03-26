import { Injectable } from '@angular/core';
import { ApiException, INumWordSwap, INumWordSwapRequest, NumWordSwap, NumWordSwapClient, NumWordSwapRequest } from 'generated/NumWordSwapModels';

@Injectable({
  providedIn: 'root'
})
export class NwsService {

  nwsClient: NumWordSwapClient = new NumWordSwapClient();
  nwsRequest: NumWordSwapRequest = new NumWordSwapRequest({
    maxNumber: 0, numWordSwaps: [], sortedOrder: false
  });
  nwsResponse: NumWordSwap[] = [];

  setMaxNumber(value: number) {
    this.nwsRequest.maxNumber = value;
    this.getNwsResponse();
  }
  addNumWordSwap(numWordSwap: NumWordSwap) {
    this.nwsRequest.numWordSwaps?.push(numWordSwap);
    this.getNwsResponse();
  }

  getNwsResponse() {
    this.nwsClient.getSwappedNumWords(this.nwsRequest)
      .then(response => this.nwsResponse = response)
      .catch(error => {
        console.error(`Get Num Word Swaps exception: ${error}`);
      });
  }
}
