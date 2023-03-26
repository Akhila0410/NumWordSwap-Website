import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NumWordSwap } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input-multipleswapword-edit',
  templateUrl: './nws-input-multipleswapword-edit.component.html',
  styleUrls: ['./nws-input-multipleswapword-edit.component.scss']
})
export class NwsInputMultipleswapwordEditComponent implements OnInit {

  @Input() numWordSwap!: NumWordSwap;

  newMultiple = new FormControl('', [Validators.max(1000), Validators.min(1)]);
  newWordSwap = new FormControl('', [Validators.minLength(1)]);

  constructor(private nwsService: NwsService) {

  }

  ngOnInit(): void {
    this.newMultiple.setValue(this.numWordSwap.number.toString());
    this.newWordSwap.setValue(this.numWordSwap.wordSwap || "");
  }

  get canSaveMultipleSwapWord(): boolean {
    return (!!this.newMultiple.value && this.newMultiple.valid && !!this.newWordSwap.value && this.newWordSwap.valid)
      && ((this.newMultiple.dirty && this.newMultiple.value != this.numWordSwap.number.toString()) || (this.newWordSwap.dirty && this.newWordSwap.value != this.numWordSwap.wordSwap));
  }

  saveMultipleSwapWord() {
    if (this.canSaveMultipleSwapWord) {
      console.log(`Saving Swap word of ${this.newWordSwap.value} for multiple ${this.newMultiple.value}`);
      this.nwsService.saveNumWordSwap(this.numWordSwap,
        new NumWordSwap({ number: parseInt(this.newMultiple.value || "") || 1001, wordSwap: (this.newWordSwap.value || "") }));
    }
  }

  deleteMultipleSwapWord() {
    this.nwsService.deleteNumWordSwap(this.numWordSwap);
  }
}
