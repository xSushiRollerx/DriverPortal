import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService} from '../order.service';


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
    const dialogRef = this.dialog.open(RequestForm, { width: '400px' });
  }
}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./home-page.component.css']
})
export class RequestForm implements OnInit, OnDestroy {

  order: any;
  status: number = -1;
  private subscriptions = new Subscription();

  constructor(private dialogRef: MatDialogRef<RequestForm>, private orderservice: OrderService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.orderservice.requestOrder().subscribe(data => {
       console.log(data); 
       this.order = data.body; 
       this.status = data.status; 
       console.log(this.status);
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  onDecline(): void {
    console.log(this.order);
    let status;
    
    if (this.order !== null || this.order !== undefined) {
      this.subscriptions.add(this.orderservice.declineOrder(this.order.id).subscribe((data) => this.dialogRef.close()));
    } else {
      this.dialogRef.close();
    }
  }

  onAccept(): void {
    if (this.order !== null || this.order !== undefined) {
      this.subscriptions.add(this.orderservice.acceptOrder(this.order.id).subscribe(data => this.dialogRef.close()));
    } else {
      this.dialogRef.close();
    }
    
  }

}

