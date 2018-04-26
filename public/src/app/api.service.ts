import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
  user = { name: "" }

  constructor(private _http: Http) { }

  login(user){
    this.user = user
  }

  getUser() {
    return this.user;
  }

  createBid(new_bid){
    this._http.post('/bids', new_bid)
    .map(data => data.json())
    .toPromise();
  }

  getAllBids(){
    return this._http.get('/bids')
    .map(data => data.json())
    .toPromise();
  }

  getAllBasketball(){
    return this._http.get('/basketball')
    .map(data => data.json())
    .toPromise();
  }
  getAllCar(){
    return this._http.get('/car')
    .map(data => data.json())
    .toPromise();
  }
  getAllSpinner(){
    return this._http.get('/spinner')
    .map(data => data.json())
    .toPromise();
  }

  getBid(id){
    return this._http.get('/bids/' + id)
    .map(data => data.json())
    .toPromise();
  }

  deleteAllBid(){
    this._http.delete('/startnewbid')
    .map(data => data.json())
    .toPromise();
  }

  deleteBid(id){
    this._http.delete('/bids/' + id)
    .map(data => data.json())
    .toPromise();
  }

}
