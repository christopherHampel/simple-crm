import { Component, inject, model, signal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, AsyncPipe, RouterLink ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  users:{} = this.userService.items$

  constructor(public userService: FirebaseServiceService) { }

  ngOnInit(): void {
    console.log(this.userService.items$);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});

    dialogRef.afterClosed().subscribe(result => { });
  }

}
