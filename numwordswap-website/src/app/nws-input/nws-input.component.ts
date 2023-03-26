import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NumWordSwap } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input',
  templateUrl: './nws-input.component.html',
  styleUrls: ['./nws-input.component.scss']
})
export class NumSwapInputComponent {

  constructor(private nwsService: NwsService) {

  }
  get requestNumWordSwaps(): NumWordSwap[] {
    return this.nwsService.nwsRequest.numWordSwaps || [];
  }
}
