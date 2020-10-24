import {Component, OnInit} from '@angular/core';
import {icon, latLng, LeafletMouseEvent, Map, MapOptions, marker, tileLayer} from 'leaflet';
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../app.constants';
import {MapPoint} from '../shared/models/map-point.model';
import {NominatimResponse} from '../shared/models/nominatim-response.model';

import extent from '../../assets/extent'
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  mapPoint: MapPoint;
  options: MapOptions;
  lastLayer: any;
  mapExtent: extent;
  results: NominatimResponse[];

  // _draw = Draw.drawLocal

  constructor (private mapService: MapService) {
  }

  ngOnInit () {
    console.log('init map')
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
    // this.setBound()
  }

  initializeMap (map: Map) {
    this.map = map;
    this.mapService.map = map
    this.createMarker();
    this.setBound()
    this.mapService.getAllMarkers()
  }

  getAddress (result: NominatimResponse) {
    this.updateMapPoint(result.latitude, result.longitude, result.displayName);
    this.createMarker();
  }

  refreshSearchList (results: NominatimResponse[]) {
    this.results = results;
  }

  private initializeMapOptions () {
    this.options = {
      zoom: 5,
      layers: [
        tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
          maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
        })
      ]
    }
  }

  private initializeDefaultMapPoint () {
    this.mapPoint = {
      name: 'Hello',
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE
    };
  }

  private onMapClick (e: LeafletMouseEvent) {
    this.clearMap();
    this.updateMapPoint(e.latlng.lat, e.latlng.lng);
    this.createMarker();
  }

  private updateMapPoint (latitude: number, longitude: number, name?: string) {
    this.mapPoint = {
      latitude: latitude,
      longitude: longitude,
      name: name ? name : this.mapPoint.name
    };
  }

  private createMarker () {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = latLng([this.mapPoint.latitude, this.mapPoint.longitude]);
    this.map.setView(coordinates, this.map.getZoom());
  }

  private getDefaultIcon () {
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    });
  }

  private clearMap () {
    if (this.map.hasLayer(this.lastLayer)) this.map.removeLayer(this.lastLayer);
  }

  private setBound() {

  this.map.setMaxBounds(extent)
  }

  private createPoint() {

  }

}


