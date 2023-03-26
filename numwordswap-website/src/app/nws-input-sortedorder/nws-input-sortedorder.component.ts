import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input-sortedorder',
  templateUrl: './nws-input-sortedorder.component.html',
  styleUrls: ['./nws-input-sortedorder.component.scss']
})
export class NwsInputSortedorderComponent {

  sortedOrder = new FormControl(false);

  constructor(private nwsService: NwsService) {

  }
  updateSortedOrder(event: any) {
    console.log('Concatenate words in Numerical Order Checked:', event.checked);
    this.nwsService.setSortedOrder(event.checked);
  }
}
