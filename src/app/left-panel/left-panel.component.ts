import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service'
import { CurrentCoordinate } from '../shared/models/current-point'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @ViewChild('imgdesc', {static: true}) imgDesk : ElementRef
  @ViewChild('formContainer', {static: true}) formContainer : ElementRef
  coordinates = {
    lat: '',
    lng: '',
    description: '',
    name: ''
  }

  number = 'null'

  constructor(private mapService: MapService, private cdr: ChangeDetectorRef) { }

 async ngOnInit() {
   console.log(this.imgDesk)
  this.mapService.cdr = this.cdr
  this.mapService.imgDesk = this.imgDesk
  this.mapService.formContainer = this.formContainer
   await this.mapService.getCities()


  }

setDescription(e) {
  console.log(e)
  this.mapService.currentCoordinates.name = e.target.value
}


 async drawPoint() {
   if(!this.mapService.selectedCity) {
     this.mapService.citySelectInvalid = true
     console.log('select city')
     return
   }
  this.clearInputs()
  // this.deskInput.nativeElement.value = ''

this.mapService.isNew = true
 this.mapService.drawPoint()

  }

  deleteLayer() {
    this.clearInputs()
    // this.mapService.coordinateShow = true
    // this.formContainer.nativeElement.hidden = true
    this.mapService.deleteLayer()
  }
  refresh() {
    this.cdr.detectChanges()
  }

  clearInputs() {

    this.mapService.currentCoordinates = new CurrentCoordinate();
    this.mapService.markerImages = []
  }



}
