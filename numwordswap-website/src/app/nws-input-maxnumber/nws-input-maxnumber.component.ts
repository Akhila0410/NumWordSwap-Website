import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input-maxnumber',
  templateUrl: './nws-input-maxnumber.component.html',
  styleUrls: ['./nws-input-maxnumber.component.scss']
})
export class NwsInputMaxnumberComponent implements OnInit {

  maxNumber = new FormControl('maxNumber', [Validators.max(1000), Validators.min(1)]);

  constructor(private nwsService: NwsService) {

  }
  ngOnInit(): void {
    this.maxNumber.valueChanges.subscribe(value => this.updateRequest(parseInt(value || "0")))
  }
  updateRequest(value: number) {
    if (this.maxNumber.valid) {
      console.log('Entered new Max Number:', value);
      this.nwsService.setMaxNumber(value);
    }
  }

}
