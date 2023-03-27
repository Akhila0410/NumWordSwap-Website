import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MultipleWordSwap } from 'generated/NumWordSwapModels';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input-multipleswapword-edit',
  templateUrl: './nws-input-multipleswapword-edit.component.html',
  styleUrls: ['./nws-input-multipleswapword-edit.component.scss']
})
export class NwsInputMultipleswapwordEditComponent implements OnInit {

  @Input() multipleWordSwap!: MultipleWordSwap;

  newMultiple = new FormControl('', [Validators.max(1000), Validators.min(1)]);
  newWordSwap = new FormControl('', [Validators.minLength(1)]);

  constructor(private nwsService: NwsService) {

  }

  ngOnInit(): void {
    this.newMultiple.setValue(this.multipleWordSwap.multiple.toString());
    this.newWordSwap.setValue(this.multipleWordSwap.wordSwap || "");
  }

  get canSaveMultipleSwapWord(): boolean {
    return (!!this.newMultiple.value && this.newMultiple.valid && !!this.newWordSwap.value && this.newWordSwap.valid)
      && ((this.newMultiple.dirty && this.newMultiple.value != this.multipleWordSwap.multiple.toString()) || (this.newWordSwap.dirty && this.newWordSwap.value != this.multipleWordSwap.wordSwap));
  }

  saveMultipleSwapWord() {
    if (this.canSaveMultipleSwapWord) {
      console.log(`Saving Swap word of ${this.newWordSwap.value} for multiple ${this.newMultiple.value}`);
      this.nwsService.saveMultipleWordSwap(this.multipleWordSwap,
        new MultipleWordSwap({ multiple: parseInt(this.newMultiple.value || "") || 1001, wordSwap: (this.newWordSwap.value || "") }));
    }
  }

  deleteMultipleSwapWord() {
    this.nwsService.deleteMultipleWordSwap(this.multipleWordSwap);
  }
}
