import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  coordinates = {
    lat: '',
    lng: '',
    description: ''
  }

  number = 'null'

  constructor(private mapService: MapService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('init conmonent')
  }

 async drawPoint() {
console.log('start add point')



  let coord: any = await this.mapService.drawPoint()
  this.coordinates = {
    lat: coord.lat,
    lng: coord.lng,
    description: ''
  }
  console.log(this.coordinates)
  //  console.log('finish add point')

  }

}
