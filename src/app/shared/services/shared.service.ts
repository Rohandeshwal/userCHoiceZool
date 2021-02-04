import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private shareModalSource = new BehaviorSubject(false);
  shareModalState = this.shareModalSource.asObservable();

  private extendHeader = new BehaviorSubject(false);
  getExtHeader = this.extendHeader.asObservable();
  isNewCB: any;

  constructor(
  ) { }

  openShareModal(val: boolean){
    this.shareModalSource.next(val);
  }

  setExtHeader(value: boolean){
    this.extendHeader.next(value);
  }

  setNewCB(value){
    this.isNewCB = value;
  }

  getNewCB(){
    return this.isNewCB;
  }
}
