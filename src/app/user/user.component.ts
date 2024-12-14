import { Component, inject, model, signal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, AsyncPipe ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  constructor(public userService: FirebaseServiceService) { }

  ngOnInit(): void {
    this.userService.getUser();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});

    dialogRef.afterClosed().subscribe(result => { });
  }

}
