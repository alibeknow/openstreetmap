import * as L from 'leaflet'
import  'leaflet-draw';
import 'leaflet.markercluster'
import 'leaflet-routing-machine'
import 'lrm-graphhopper'
import {environment} from '../../../environments/environment'

import marker2 from '../../../assets/marker-256.png'
import markerBlue from '../../../assets/map-marker-green.svg'
import markerRed from '../../../assets/map-marker-red.svg'
import markerForRoute from '../../../assets/route_marker.png'



const marker = 'data:image/png;base64,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'
 const greenIcon = L.icon({
  iconUrl: marker2,
  shadowUrl: null,
  iconSize: new L.Point(24, 24),


});

const blueMarker = L.icon({
  iconUrl: markerBlue,
  shadowUrl: null,
  iconSize: new L.Point(24, 24),


});

const redMarker = L.icon({
  iconUrl: markerRed,
  shadowUrl: null,
  iconSize: new L.Point(24, 24),


});

const routeIcon = L.icon({
  iconUrl: markerForRoute,
  shadowUrl: null,
  iconSize: new L.Point(26, 26),
})



export function drawPoint(map, options) {
const markerId =  new L.Draw.Marker(map, {
    icon: greenIcon
  }).enable()

}

export function createMarker(lat, lng, marker) {
  let icon
  if(marker == 'blue') {
    icon = blueMarker
  }else if(marker = 'red') {
    icon = redMarker
  }else {
    icon = greenIcon
  }

 const createdMarker = new L.marker([lat, lng], {
   icon: icon,
 });

  return createdMarker
}

export function createDraggbleMarker(lat, lng) {
  const createdMarker = new L.marker([lat, lng], {
    icon: routeIcon,
    draggable: true
  });
  
  return createdMarker
}

export function setPositionMarker(marker, position) {
  marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
}


export function createMarkerCluster() {
  const mcg = L.markerClusterGroup({
    chunkedLoading: true,
    // singleMarkerMode: true,
    spiderfyOnMaxZoom: false
  });
  return mcg
}

export function createFeature(layer) {
  return L.geoJSON(layer)
}

export function leafletCreateRoute(start, end) {

 const route = L.Routing.control({
    waypoints: [
        L.latLng(start.lat, start.lng),
        L.latLng(end.lat, end.lng)
    ],
    router: L.Routing.graphHopper(undefined,  {
      
     
      serviceUrl: `${environment.graphopperUrl}/route`,
      urlParameters: { 
        'Access-Control-Expose-Headers': 'Location',
        limit: 'The X-RateLimit-Limit', 
        remaining: 'The X-RateLimit-Remaining',
        reset: 'The X-RateLimit-Reset',
        credits: 'The X-RateLimit-Credits',
       profile: 'car',
        locale: 'ru-Ru',
        points_encoded:false
      }

  }),
  })
  return route
}

export function addRouteToMap(feature) {
  var featureJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": feature
        }
      }
    ]
  }
const layer = L.geoJSON(featureJson)
console.log(layer)
return layer
}

export function wait(time) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
resolve()
    }, time)
  })
}


