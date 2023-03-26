import { Injectable } from '@angular/core';
import { NumWordSwap, NumWordSwapClient, NumWordSwapRequest } from 'generated/NumWordSwapModels';

@Injectable({
  providedIn: 'root'
})
export class NwsService {

  nwsClient: NumWordSwapClient = new NumWordSwapClient();
  nwsRequest: NumWordSwapRequest = new NumWordSwapRequest({
    maxNumber: 0, numWordSwaps: [], sortedOrder: false
  });
  nwsResponse: NumWordSwap[] = [];


  getNwsResponse() {
    this.nwsClient.getSwappedNumWords(this.nwsRequest)
      .then(response => this.nwsResponse = response)
      .catch(error => {
        console.error(`Get Num Word Swaps exception: ${error}`);
      });
  }

  setMaxNumber(value: number) {
    this.nwsRequest.maxNumber = value;
    this.getNwsResponse();
  }

  addNumWordSwap(numWordSwap: NumWordSwap) {
    this.nwsRequest.numWordSwaps?.push(numWordSwap);
    this.getNwsResponse();
  }

  saveNumWordSwap(currNumWordSwap: NumWordSwap, newNumWordSwap: NumWordSwap) {
    if (!!this.nwsRequest.numWordSwaps && this.nwsRequest.numWordSwaps.length > 0) {
      let index: number = this.nwsRequest.numWordSwaps?.indexOf(currNumWordSwap)
      this.nwsRequest.numWordSwaps[index] = newNumWordSwap;
      this.getNwsResponse();
    }
  }

  deleteNumWordSwap(currNumWordSwap: NumWordSwap) {
    if (!!this.nwsRequest.numWordSwaps && this.nwsRequest.numWordSwaps.length > 0) {
      let index: number = this.nwsRequest.numWordSwaps?.indexOf(currNumWordSwap)
      this.nwsRequest.numWordSwaps.splice(index, 1);
      this.getNwsResponse();
    }
  }
}
