import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import 'leaflet-draw';
import marker from '../../assets/marker-256.png'
console.log(marker)


@Injectable({
  providedIn: 'root'
})
export class MapService {
 count = 0;
 map = null;
  greenIcon = L.icon({
  iconUrl: marker,
  shadowUrl: null,
  iconSize: new L.Point(24, 24),


});
  constructor() { }

  drawPoint() {

  const createdPoint= new L.Draw.Marker(this.map, {
    icon: this.greenIcon
  });

    createdPoint.enable()
    this.map.on('draw:created',  (e)=> {
      // Do whatever you want with the layer.
      // e.type will be the type of layer that has been draw (polyline, marker, polygon, rectangle, circle)
      // E.g. add it to the map
      // e.layer.addTo(this.map);
      // this.map.addLayer(e.layer)
      this.map.addLayer(e.layer)
  });

  }
}
