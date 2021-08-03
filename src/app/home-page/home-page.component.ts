import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService, Order } from '../order.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog, private orderService: OrderService) { }

  ngOnInit(): void {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(RequestForm, { width: '250px' });
  }
}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./home-page.component.css']
})
export class RequestForm implements OnInit, OnDestroy {

  order: any;
  private subscriptions = new Subscription();

  constructor(public dialogRef: MatDialogRef<RequestForm>, private orderservice: OrderService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.orderservice.requestOrder().subscribe(data => { console.log(data); this.order = data;}));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onNoClick(): void {
    console.log(this.order);
    if (this.order !== null || this.order !== undefined) {
      this.subscriptions.add(this.orderservice.declineOrder(this.order.id).subscribe(() => console.log("declined order")));
    }
    this.dialogRef.close();
  }

  onAcceptance(): void {
    this.subscriptions.add(this.orderservice.acceptOrder(this.order.id).subscribe());
  }

}

