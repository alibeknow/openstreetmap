import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service'

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.scss']
})
export class CreateRouteComponent implements OnInit {

  constructor(public mapService: MapService) { }

  ngOnInit() {
  }

}
