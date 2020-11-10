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
  @ViewChild('descriptionInput', {static: true}) descriptionInput : ElementRef
  @ViewChild('formContainer', {static: true}) formContainer : ElementRef
  @ViewChild('lngInput', {static: true}) lngInput : ElementRef
  @ViewChild('latInput', {static: true}) latInput : ElementRef
  coordinates = {
    lat: '',
    lng: '',
    description: '',
    name: ''
  }

  number = 'null'

  constructor(private mapService: MapService, private cdr: ChangeDetectorRef) { }

 async ngOnInit() {

    this.mapService.deskInput = this.deskInput
    this.mapService.descriptionInput = this.descriptionInput
    this.mapService.formContainer = this.formContainer
    this.mapService.latInput = this.latInput
    this.mapService.lngInput = this.lngInput
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
  this.descriptionInput.nativeElement.value = ''
  }



}
