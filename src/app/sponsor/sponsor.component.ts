import { SponsorService } from './../sponsor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  tableform: FormGroup;

  constructor( private fb: FormBuilder, private sponsorService: SponsorService) { }

  ngOnInit() {
    this.tableform = this.fb.group({
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      sponsorId: ['', Validators.required]


    });
  }
  submitForm(): void {
    if (this.tableform.invalid) {
      return;
    }
  }
  getSponsor(): void {
    this.sponsorService.getSponsorid(this.tableform.value)
    .subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        console.log('Sponsor ID', data);

      }
    );
  }

}
