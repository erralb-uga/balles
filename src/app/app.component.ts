import { Component } from '@angular/core';
import {PhysiqueService} from './physique.service';
import {Balle} from './PhysiqueDefs';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ps: PhysiqueService) {}

  get ballesObs(): Observable<Balle[]> {
    return this.ps.ballesObs;
  }

  addBalle(evt: MouseEvent) {
    console.log(evt);
    const x = evt.offsetX;
    const y = this.W - evt.offsetY;
    this.ps.addBalle(x, y, 10, 'blue');
  }

  get W(): number {
    return this.ps.W;
  }

  get transfo(): string {
    return `scale(1, -1) translate(0, -${this.W})`;
  }
}
