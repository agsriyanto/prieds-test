import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

export interface DialogData {}

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogRequestNumber, {
      data: {
        date: moment().format('MM/ddd/yyyy, hh:mm:ss A'),
      },
    });
  }
}

@Component({
  selector: 'dialog-request-number',
  templateUrl: 'dialog-request-number.html',
})
export class DialogRequestNumber {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
