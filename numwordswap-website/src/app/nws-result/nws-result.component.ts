import { Component } from '@angular/core';
import { NumWordSwap } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-result',
  templateUrl: './nws-result.component.html',
  styleUrls: ['./nws-result.component.scss']
})
export class NumSwapResultComponent {

  constructor(private nwsService: NwsService) {

  }

  get numWordSwaps(): NumWordSwap[] {
    return this.nwsService.nwsResponse;
  }

  get displayWelcomeMessage(): boolean {
    return !this.numWordSwaps || this.numWordSwaps.length == 0;
  }
}
