import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  submit(): void {
    console.log('SUBMIT FIRED', this.user);
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
