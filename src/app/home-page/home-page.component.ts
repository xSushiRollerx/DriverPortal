import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log("I've been clicked!");
    const dialogRef = this.dialog.open(RequestForm, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Close Success");
    });
  }
}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./home-page.component.css']
})
export class RequestForm {


  constructor(public dialogRef: MatDialogRef<RequestForm>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

