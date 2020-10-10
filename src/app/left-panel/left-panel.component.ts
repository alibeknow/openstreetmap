import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
