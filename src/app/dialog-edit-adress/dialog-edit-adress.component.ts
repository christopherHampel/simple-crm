import { Component, inject, Input } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { CommonModule } from '@angular/common';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatLabel,
    FormsModule,
    MatInputModule,
    MatIcon,
    MatProgressBarModule,
    MatDialogActions,
    MatDialogClose,
    CommonModule
  ],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  user!: User;
  @Input() firstName:string= "";
  loading:boolean = false;
  id:string = '';

  readonly dialogRef = inject(MatDialogRef<DialogEditAdressComponent>, {});

  constructor(public userService: FirebaseServiceService) {}

  saveUser() {
    this.userService.updateUser(this.id, this.user);
  }
}
