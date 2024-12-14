import { Component, inject, Input } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
            CommonModule,
            MatFormFieldModule, 
            MatLabel, 
            MatDialogActions, 
            MatDialogClose, 
            FormsModule, 
            MatInputModule,
            MatIcon,
            MatDatepickerModule,
            MatNativeDateModule,
            MatProgressBarModule
            ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate!: Date;
  loading:boolean = false;

  constructor(private userService: FirebaseServiceService) { }

  readonly dialogRef = inject(MatDialogRef<UserComponent>);
  @Input() firstName:string= "";

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
    this.loading = true;
    this.userService.
      addUser(this.user.toJSON()).
      then( (result:any) => {
        this.loading = false;
        console.log('Adding user finished', result)
      })
      
  }
}
