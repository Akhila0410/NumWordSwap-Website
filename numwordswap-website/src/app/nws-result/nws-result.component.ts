import { Component } from '@angular/core';
import { NumberSwapedWord } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-result',
  templateUrl: './nws-result.component.html',
  styleUrls: ['./nws-result.component.scss']
})
export class NumSwapResultComponent {

  constructor(private nwsService: NwsService) {

  }

  get numberSwappedWords(): NumberSwapedWord[] {
    return this.nwsService.nwsResponse;
  }

  get displayWelcomeMessage(): boolean {
    return !this.numberSwappedWords || this.numberSwappedWords.length == 0;
  }
}
