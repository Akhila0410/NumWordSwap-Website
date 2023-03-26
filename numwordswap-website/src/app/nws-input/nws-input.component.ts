import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NwsService } from '../nws.service';

@Component({
  selector: 'nws-input',
  templateUrl: './nws-input.component.html',
  styleUrls: ['./nws-input.component.scss']
})
export class NumSwapInputComponent implements OnInit {

  maxNumber = new FormControl('maxNumber', [Validators.max(1000), Validators.min(1)]);

  constructor(private nwsService: NwsService) {

  }
  ngOnInit(): void {
    this.maxNumber.valueChanges.subscribe(value => this.updateRequest(parseInt(value || "0")))
  }
  updateRequest(value: number) {
    if (this.maxNumber.valid) {
      console.log('Entered new Max Number:', value);
      this.nwsService.nwsRequest.maxNumber = value;
      this.nwsService.getNwsResponse();
    }
  }

}
