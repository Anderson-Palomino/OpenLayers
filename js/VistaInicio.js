const map = new ol.Map({
  controls: ol.control.defaults.defaults({
    zoom: true,
    zoomOptions: { zoomInTipLabel: "Acercar", zoomOutTipLabel: "Alejar" },
  }),
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: new ol.proj.fromLonLat([-77.026211, -11.883041]),
    zoom: 18,
  }),
});

console.log(map.getView().getProjection());


