/*
Oppgave 6: Grupper lag

I denne oppgaven vil vi se nærmere på gruppering og aktivering/deaktivering av
kartlag. Det vil være nyttig å ha [Layer Groups and Layers
Control](http://leafletjs.com/examples/layers-control/) åpen mens dere løser
disse oppgavene.
 */
const mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>';

const mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
const streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

const map = L.map('mapid', {
    center: [60.39096, 5.32579],
    maxBounds: [[59.927926, 4.643638], [60.632901, 6.432609]],
    minZoom: 6,
    zoom: 12
});
map.addLayer(streets);

const pingvindammen = L.polygon([
    [60.39978, 5.30420],
    [60.39977, 5.30442],
    [60.39970, 5.30442],
    [60.39956, 5.30436],
    [60.39957, 5.30412],
    [60.39960, 5.30410]
], {
  color: '#0f0'
});
pingvindammen.bindPopup('Pingvindammen');


const koengen = L.marker([60.40034, 5.31987]);
koengen.bindPopup('Koengen');

const floybanen = L.polyline([
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
], {
  color: '#f00'
});
floybanen.bindPopup('Fløybanen');

/*
 Oppgave 6.1 - layerGroup

 I oppgave 2 lagde vi tre kartlag (Pingvindammen, Koengen og Fløybanen) og
 viste dem på kartet. Vi kan samle disse lagene i en gruppe med L.layerGroup,
 slik at vi kan behandle dem som ett lag i stedet. Bruk L.layerGroup til å lage
 en gruppe, og legg den til i kartet. Se
 http://leafletjs.com/examples/layers-control/
 */
// din kode her


/*
 Oppgave 6.2 - slå kartlag av og på

 Kartlag kan deles inn i to kategorier. Baselayers og Overlays. Baselayers er
 selve bakgrunnskartet, mens alle markører og andre geometrier er overlays.

 L.control.layers tar to argumenter: baseLayers og overlays. Bruk
 L.control.layers til velge mellom gatekart og et kart i gråtoner. Variablene
 `grayscale` og `streets`, som er definert øverst i denne fila, definerer de to
 kartlagene.
 */
const baseLayers = {
    // definer kartlagene her
};
const overlays = {
    // definer gruppen fra 6.1 her
};
// bruk L.control.layers til å legge til kartlagene og stedene, og legg dem til
// i kartet med .addTo(map)


const duration = 0.5;
document.querySelector('.js-pingvindammen').addEventListener('click', () => {
    map.flyToBounds(pingvindammen.getBounds(), {
        duration
    });
});

document.querySelector('.js-koengen').addEventListener('click', () => {
    map.flyTo(koengen.getLatLng(), 18, {
        duration
    });
});

document.querySelector('.js-floybanen').addEventListener('click', () => {
    map.flyToBounds(floybanen.getBounds(), {
        duration
    });
});

document.querySelector('.js-helebergen').addEventListener('click', () => {
    map.flyTo([60.39096, 5.32579], 12, {
        duration
    });
});
