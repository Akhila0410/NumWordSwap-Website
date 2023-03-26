import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NumWordSwap } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input-multipleswapword',
  templateUrl: './nws-input-multipleswapword.component.html',
  styleUrls: ['./nws-input-multipleswapword.component.scss']
})
export class NwsInputMultipleswapwordComponent {

  multiple = new FormControl('', [Validators.max(1000), Validators.min(1)]);
  wordSwap = new FormControl('', [Validators.minLength(1)]);

  constructor(private nwsService: NwsService) {

  }

  get canAddMultipleSwapWord(): boolean {
    return !!this.multiple.value && this.multiple.valid && !!this.wordSwap.value && this.wordSwap.valid;
  }

  addMultipleSwapWord() {
    if (this.canAddMultipleSwapWord) {
      console.log(`Adding Swap word of ${this.wordSwap.value} for multiple ${this.multiple.value}`);
      this.nwsService.addNumWordSwap(new NumWordSwap({ number: parseInt(this.multiple.value || ""), wordSwap: (this.wordSwap.value || "") }));
    }
  }
}
