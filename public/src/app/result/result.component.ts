import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  user = { name: "" };

  all_basketball = [];
  all_car = [];
  all_spinner = [];

  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit() {
    this.user = this._api.getUser();
    this.getAllBasketball();
    this.getAllCar();
    this.getAllSpinner();
  }

  getAllBasketball(){
    this._api.getAllBasketball()
      .then(data => this.all_basketball = data.slice(0, 3))
      .catch(errors => console.log(errors))
  }
  getAllCar(){
    this._api.getAllCar()
      .then(data => this.all_car = data.slice(0, 3))
      .catch(errors => console.log(errors))
  }
  getAllSpinner(){
    this._api.getAllSpinner()
      .then(data => this.all_spinner = data.slice(0, 3))
      .catch(errors => console.log(errors))
  }
  startNewBid(){
    this._api.deleteAllBid();
    this.router.navigate(['/dashboard']);
  }

}
