
const map = new ol.Map({
  controls: ol.control.defaults({
    zoom: true,
    zoomOptions: {
      zoomInTipLabel: "Acercar",
      zoomOutTipLabel: "Alejar",
    },
  }),
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
      // Para usar Google Maps como fuente, descomenta el siguiente bloque
      /*
      source: new ol.source.XYZ({
        url: "http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
        attributions: "Google Inc.",
        attributionsCollapsible: false,
      }),
      */
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        url: "data/features.json",
        format: new ol.format.GeoJSON(),
      }),
      /*
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "orange",
          width: 3,
          lineDash: [15, 10, 1, 10], // Valor-espacio patrón
        }),
        fill: new ol.style.Fill({
          color: "rgba(255, 165, 0, 0.3)",
        }),
        image: new ol.style.Circle({
          stroke: new ol.style.Stroke({
            color: "orange",
            width: 3,
          }),
          radius: 8,
          fill: new ol.style.Fill({
            color: "rgba(255, 165, 0, 0.3)",
          }),
        }),
        text: new ol.style.Text({
          text: "Objeto",
          offsetY: 20,
          scale: 1.5,
          stroke: new ol.style.Stroke({
            color: "#218ddc",
            width: 4,
          }),
          fill: new ol.style.Fill({
            color: "#020500",
          }),
        }),
      }),
      */
     style:estilos
    }),
  ],
  view: new ol.View({
    // Coordenadas centradas en Lima, Perú (convertidas con ol.proj)
    center: [-8574529.390430272, -1332463.4945135845],
    zoom: 15,
    minZoom: 12,
    maxZoom: 17,
  }),
});

// Imprimir la proyección usada
console.log(map.getView().getProjection());