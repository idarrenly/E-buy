import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = { name: "" };

  new_bid1 = {name: "", item: "Basketball", price: ""};
  new_bid2 = {name: "", item: "Car", price: ""};
  new_bid3 = {name: "", item: "Spinner", price: ""};

  all_bids = [];
  all_basketball = [];
  all_car = [];
  all_spinner = [];
  
  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit() {
    this.user = this._api.getUser();
    this.new_bid1.name = this.user.name;
    this.new_bid2.name = this.user.name;
    this.new_bid3.name = this.user.name;
    this.getAllBasketball();
    this.getAllCar();
    this.getAllSpinner();
    this.getAll();
  }

  getAll(){
    this._api.getAllBids()
      .then(data => this.all_bids = data)
      .catch(errors => console.log(errors))
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

  onSubmit1(){
    this._api.createBid(this.new_bid1)
    this.getAllBasketball();
    this.getAll();
  }
  onSubmit2(){
    this._api.createBid(this.new_bid2)
    this.getAllCar();
    this.getAll();
  }
  onSubmit3(){
    this._api.createBid(this.new_bid3)
    this.getAllSpinner();
    this.getAll();
  }

  endBid(){
    this.router.navigate(['/result']);
  }

  cannotEndBid(){
    alert("Cannot end the bid. One product does not have any bid yet.")
    // this.router.navigate(['/dashboard']);
  }

}