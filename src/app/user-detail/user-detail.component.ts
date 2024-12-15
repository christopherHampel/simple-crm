import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  routeSub!:{}
  userDetails: User = new User();

  constructor(private route: ActivatedRoute, public userService: FirebaseServiceService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      const userId: string = params['id'];
      this.userService.getUser(userId).then((userDetails) => {
        this.userDetails = new User(userDetails);
        console.log(this.userDetails);
      });
    });
  }
}
