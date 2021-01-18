import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MapService} from '../services/map.service'

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.scss']
})
export class CreateRouteComponent implements OnInit {
  @ViewChild('table_pdf', {static: true}) tablePdf : ElementRef
  constructor(public mapService: MapService) { }

  ngOnInit() {
  }

}
