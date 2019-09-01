import { Injectable } from '@angular/core';
import {Balle, manageBalles} from './PhysiqueDefs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysiqueService {
  W = 400;
  private balles: Balle[] = [];
  private ballesSubj = new BehaviorSubject<Balle[]>( [] );
  readonly ballesObs = this.ballesSubj.asObservable();

  constructor() {
    setInterval( () => {
      manageBalles(this.balles, 0.1, this.W);
      this.ballesSubj.next( this.balles );
    }, 10 );
  }

  addBalle(x: number, y: number, r: number, c: string) {
    this.balles.push({
      P: [x, y],
      V: [0, 0],
      r, c, m: r * r
    });
  }
}
