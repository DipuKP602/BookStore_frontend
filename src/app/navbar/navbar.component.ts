import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navStyle = {
    backgroundColor : '#4079e3',
    padding : 0
  }


  logoStyle = {
    height: '60px',
    width: '150px'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.router.navigateByUrl('');
  }

}
