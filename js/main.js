const map = new ol.Map({
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

map.addControl(
  new ol.control.FullScreen({
    className: "proy-ol-full-screen",
    tipLabel: "Pantalla Completa",
  })
);
