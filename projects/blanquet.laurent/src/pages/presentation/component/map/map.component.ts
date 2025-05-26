import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit, OnInit {

  @ViewChild('map')
  mapElementRef: ElementRef = null!;

  private map!: L.Map

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.initMap();

    L.circleMarker([49.23149435689289, 0.9944787184297353], {
      color: 'lightblue',
      fillColor: 'blue',
      fillOpacity: 0.8,
      radius: 8
    }).addTo(this.map);

  }

  private initMap() {

    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    this.map = L.map(this.mapElementRef.nativeElement, {
      center : [49.23149435689289, 0.9944787184297353],
      zoom : 9,
      maxZoom: 16,
      minZoom: 6
    });
    L.tileLayer(baseMapURl).addTo(this.map);

  }

}
