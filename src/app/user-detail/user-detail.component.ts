import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { User } from '../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatMenuModule ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  routeSub!:{}
  userDetails: User = new User();
  userId:string = '';

  constructor(private route: ActivatedRoute, public userService: FirebaseServiceService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService.getUser(this.userId).then((userDetails) => {
        this.userDetails = new User(userDetails);
        console.log(this.userDetails);
      });
    });
  }

  editMenu() {
    const dialogRef = this.dialog.open(DialogEditAdressComponent);
    dialogRef.componentInstance.user = new User(this.userDetails.toJSON());
    dialogRef.componentInstance.id = this.userId;

    dialogRef.afterClosed().subscribe(result => { });
  }
}
