import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName: string | null = null;

  ngOnInit() {
    console.log(localStorage.getItem('username'));
    this.userName = localStorage.getItem('username');
  }
}
