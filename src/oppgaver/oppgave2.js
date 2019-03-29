/*
 Oppgave 2: Markører og popups

 I denne oppgaven vil vi fortsette på det gode grunnlaget vi etablerte i oppgave
 1, og lære mer om markører og geometrier.
 */

const bakgrunnsLag = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
});
const duration = 0.5;

// Avgrensning av kartet for oppgave 2.1
const boundarySouthWest = [59.927926, 4.643638];
const boundaryNorthEast = [60.632901, 6.432609];

/*
 Oppgave 2.1 - Avgrens kartet

 Kartets startposisjon er Bergen, og i denne workshopen vil vi kun forholde oss
 til Bergen og omegn. Derfor ønsker vi også å avgrense kartets ytre rammer, så
 det ikke blir mulig å navigere seg vekk fra Hordaland.

 Vi ønsker ikke at det skal være mulig å zoom/flytte kartet for langt. Over har
 vi gitt dere koordinatene til to punkter, som bestemmer avgrensningen. Bruk
 options-objektet til L.map for å avgrense kartet. Se
 http://leafletjs.com/reference-1.4.0.html#map-maxbounds og
 http://leafletjs.com/reference-1.4.0.html#map-minzoom.
 */
const map = L.map('mapid', {
    // din kode her
});
map.addLayer(bakgrunnsLag);
map.setView([60.39096, 5.32579], 12);

/*
 Oppgave 2.2 - Polygon rundt Pingvindammen

 Akkurat nå er det mulig å navigere seg frem til Pingvindammen, men vil gjerne at
 området rundt Pingvindammen og Akvariet skal bli enda mer synlig.

 Under har vi gitt dere koordinatene til området som omkranser Pingvindammen. 
 Bruk L.polygon til å tegne et polygon på kartet. L.polygon tar også et
 options-objekt som parameter, der man blant annet kan sette fargen. Fargen skal
 være grønn.

 Se http://leafletjs.com/reference-1.4.0.html#polygon
 */
const pingvindammen = [
    [60.39978, 5.30420],
    [60.39977, 5.30442],
    [60.39970, 5.30442],
    [60.39956, 5.30436],
    [60.39957, 5.30412],
    [60.39960, 5.30410]
];
// din kode her


/*
 Oppgave 2.3 - Markør på Koengen

 Konstanten koengen er koordinatene til Koengen. Vis en markør på Koengen med
 L.marker. Se http://leafletjs.com/reference-1.4.0.html#marker
 */
const koengen = [60.40034, 5.31987];
// din kode her

/*
 Oppgave 2.4 - Fløybanen

 Det vil være mer praktisk å bruke en linje enn et polygon eller en markør for å
 visualisere Fløybanen.

 Bruk L.polyline for å markere traséen til Fløybanen. Koordinatene er gitt
 under. Linjen til Fløybanen skal være rød.

 Se http://leafletjs.com/reference-1.4.0.html#polyline
 */
const floybanen = [
    [60.39661, 5.32948],
    [60.39633, 5.33092],
    [60.39623, 5.33138],
    [60.39579, 5.33312],
    [60.39564, 5.33381],
    [60.39554, 5.33445],
    [60.39542, 5.33575],
    [60.39536, 5.33734],
    [60.39530, 5.33871],
    [60.39516, 5.33973],
    [60.39496, 5.34099],
    [60.39478, 5.34265],
];

// din kode her

/*
 Oppgave 2.5 - Popups

 Når man klikker på de forskjellige markørene i kartet, skal det dukke opp en
 popup som forklarer hva du klikket på. Bruk bindPopup for å legge til en markør
 på Pingvindammen, Koengen og Fløybanen.

 Legg til popups på Pingvindammen, Koengen og Fløybanen med navn på severdigheten, og
eventuell annen relevant informasjon. bindPopup godtar HTML, så det er mulig å
formatere teksten og legge til bilder.
    
 Se http://leafletjs.com/reference-1.4.0.html#popup
 */
// din kode her


/*
 Oppgave 2.6 - Refaktorering av navigasjonen

 Alle flyTo-kallene har nå hardkodete koordinater. Skriv dem om til å hente
 koordinatene fra markørene som vi har laget tidligere, slik at tallene bare er
 skrevet inn ett sted. Endre også flyTo til flyToBounds der det er aktuelt, slik
 at Leaflet regner ut zoom-nivå på egen hånd.

 Se http://leafletjs.com/reference-1.4.0.html#map-flytobounds
 */
document.querySelector('.js-pingvindammen').addEventListener('click', () => {
    map.flyTo([60.39966, 5.30427], 18, {
        duration
    });
});

document.querySelector('.js-koengen').addEventListener('click', () => {
    map.flyTo([60.40034, 5.31987], 18, {
        duration
    });
});

document.querySelector('.js-floybanen').addEventListener('click', () => {
    map.flyTo([60.39639, 5.32851], 18, {
        duration
    });
});


// Denne snutten skal ikke refaktoreres
document.querySelector('.js-helebergen').addEventListener('click', () => {
    map.flyTo([60.39096, 5.32579], 12, {
        duration
    });
});


function onMapClick(e) {
    console.log('Du klikket på koordinatet [' + e.latlng.lat + ', ' + e.latlng.lng + ']');
}
map.on('click', onMapClick);
