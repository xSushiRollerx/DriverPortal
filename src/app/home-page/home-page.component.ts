import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService, Order } from '../order.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  order: Order | undefined | null;

  constructor(public dialog: MatDialog, private orderService: OrderService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log("I've been clicked!");
    try {
      this.orderService.requestOrder().subscribe(
        (data) => {
          console.log(data);
          this.order = data.body;


          const dialogRef = this.dialog.open(RequestForm, { width: '250px' });

          dialogRef.afterClosed().subscribe(result => { console.log("Close Success"); });
        }

      )
    } catch (error) {
      console.log("error");
    }
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

