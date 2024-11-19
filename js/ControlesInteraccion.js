const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(vectorLayer);

const i_dibujo = new ol.interaction.Draw({
  type: "Point",
  source: vectorSource,
});
map.addInteraction(i_dibujo);

const i_linea = new ol.interaction.Draw({
  type: "LineString",
  source: vectorSource,
});
// map.addInteraction(i_linea);

const i_poligono = new ol.interaction.Draw({
  type: "Polygon",
  source: vectorSource,
});
// map.addInteraction(i_poligono);

const b_limpiar = document.getElementById("limpiar");
b_limpiar.addEventListener("click", function () {
  vectorSource.clear();
});

const b_descargar = document.getElementById("descargar");

const formato = new ol.format.GeoJSON({
  featureProjection: "EPSG:3857",
});

vectorSource.on("change", function () {
  const features = vectorSource.getFeatures();
  const json = formato.writeFeatures(features);
  b_descargar.href =
    "data:application/json;charset=utf-8," + encodeURIComponent(json);
});
