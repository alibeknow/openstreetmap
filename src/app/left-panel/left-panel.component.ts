import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @ViewChild('deskInput', {static: true}) deskInput : ElementRef
  @ViewChild('formContainer', {static: true}) formContainer : ElementRef
  @ViewChild('lngInput', {static: true}) lngInput : ElementRef
  @ViewChild('latInput', {static: true}) latInput : ElementRef
  coordinates = {
    lat: '',
    lng: '',
    description: ''
  }

  number = 'null'

  constructor(private mapService: MapService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('init conmonent')
    this.mapService.deskInput = this.deskInput
    this.mapService.formContainer = this.formContainer
    this.mapService.latInput = this.latInput
    this.mapService.lngInput = this.lngInput

  }

setDescription(e) {
  this.mapService.currentCoordinates.description = e.target.value
}


 async drawPoint() {
  this.clearInputs()
  // this.deskInput.nativeElement.value = ''
console.log(this.deskInput)

 this.mapService.drawPoint()

  }

  deleteLayer() {
    this.clearInputs()
    // this.mapService.coordinateShow = true
    this.formContainer.nativeElement.hidden = true
    this.mapService.deleteLayer()
  }

  clearInputs() {
    this.deskInput.nativeElement.value = ''
  this.lngInput.nativeElement.value =  ''
  this.latInput.nativeElement.value = ''
  }

}
