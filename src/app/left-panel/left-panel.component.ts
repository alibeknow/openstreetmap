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


 this.mapService.drawPoint()

  }

}
