import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { LocalisationService } from '../../shared/services/localisation/localisation.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: Leaflet.Map;
  coords: any;
  localisations: any;

  constructor(private localisationService:LocalisationService) {}

  ngOnInit() { }
  ionViewDidEnter(){
    this.initMap()
  }

  // ============== Version automatisé ====================
  async initMap() {
    Geolocation.requestPermissions();
    // fonction asynchrone pour que Geolocalisation puisse récupérer la position acutel du navigateur 
    const coordinates = await Geolocation.getCurrentPosition();
    //  Création de la map et initilisation de la vue afficher avec setView
    this.map = Leaflet.map('map').setView([coordinates.coords.latitude, coordinates.coords.longitude], 13);
    //  tileLayer permet de choisir le type de carte que l'on veux afficher
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    // Affiche le marker de la position ou l'on ce trouve
    Leaflet.marker([coordinates.coords.latitude, coordinates.coords.longitude]).addTo(this.map).bindPopup('Votre position');
    this.getlocalisations();
  }

  // récupération du service qui contient l'ensemble des données des coordonnées
  getlocalisations():void{
    this.localisationService.getlocalisations()
    .then( data => {
      data.forEach(function(value){
        // bouble pour récupérer chaque données indépendante et affichage des coordonnées sur la carte
        Leaflet.marker([value.latitude, value.longitude]).addTo(this.map).bindPopup('Nom : ' + value.name + '<br>Adresse : ' + value.adress + '<br>Ville : ' + value.city); 
        // le this de fin permet d'utiliser this.map dans la boucle
      }, this)
    })
    .catch(err => console.log(err))
  }
}
