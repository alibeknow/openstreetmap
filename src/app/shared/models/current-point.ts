export class CurrentCoordinate {
  name: string;
  lat: string;
  lng: string;
  descriprion: []
  constructor();
  constructor(name ?, lat?, lng?, description?) {
    this.name = name || ''
    this.lat = lat || ''
    this.lng = lng || ''
    this.descriprion = description || []
  }



}
