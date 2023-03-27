import { Injectable } from '@angular/core';
import { MultipleWordSwap, NumberSwapedWord, NumWordSwapClient, NumWordSwapRequest } from 'generated/NumWordSwapModels';

@Injectable({
  providedIn: 'root'
})
export class NwsService {

  nwsClient: NumWordSwapClient = new NumWordSwapClient();
  nwsRequest: NumWordSwapRequest = new NumWordSwapRequest({
    maxNumber: 0, multipleWordSwaps: [], sortedOrder: false
  });
  nwsResponse: NumberSwapedWord[] = [];


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

  setSortedOrder(value: boolean) {
    this.nwsRequest.sortedOrder = value;
    this.getNwsResponse();
  }

  addMultipleWordSwap(numWordSwap: MultipleWordSwap) {
    this.nwsRequest.multipleWordSwaps?.push(numWordSwap);
    this.getNwsResponse();
  }

  saveMultipleWordSwap(currNumWordSwap: MultipleWordSwap, newNumWordSwap: MultipleWordSwap) {
    if (!!this.nwsRequest.multipleWordSwaps && this.nwsRequest.multipleWordSwaps.length > 0) {
      let index: number = this.nwsRequest.multipleWordSwaps?.indexOf(currNumWordSwap)
      this.nwsRequest.multipleWordSwaps[index] = newNumWordSwap;
      this.getNwsResponse();
    }
  }

  deleteMultipleWordSwap(currNumWordSwap: MultipleWordSwap) {
    if (!!this.nwsRequest.multipleWordSwaps && this.nwsRequest.multipleWordSwaps.length > 0) {
      let index: number = this.nwsRequest.multipleWordSwaps?.indexOf(currNumWordSwap)
      this.nwsRequest.multipleWordSwaps.splice(index, 1);
      this.getNwsResponse();
    }
  }
}
