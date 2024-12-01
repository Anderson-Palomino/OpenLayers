import RotacionNorte from "./RotacionNorte.js";
import estilos from "./Estilos.js";
import PosicionActual from "./PosicionActual.js";
import { geolocation, configurarEventos } from "./GeoLocation.js";

const map = new ol.Map({
  controls: ol.control.defaults
    .defaults({
      zoom: true,
      zoomOptions: { zoomInTipLabel: "Acercar", zoomOutTipLabel: "Alejar" },
    })
    .extend([new RotacionNorte()]),
  // controls: ol.control.defaults.defaults().extend([new RotacionNorte()]),
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
      title: "Open Street Map",
      baseLayer: true,
      visible: false,
      //source: new ol.source.XYZ({
      //url: "http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
      //title:"Google Road",
      //attributions: "Google Inc.",
      //attributionsCollapsible: false,
      //}),
    }),

    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      }),
      title: "Google Satellite",
      baseLayer: true,
      visible: false,
    }),

    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      }),
      title: "Google Hybrid",
      baseLayer: true,
    }),

    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
      }),
      title: "Google Terrain",
      baseLayer: true,
      visible: false,
    }),

    new ol.layer.Vector({
      source: new ol.source.Vector({
        url: "data/ANP.geojson",
        format: new ol.format.GeoJSON(),
      }),
      // style: new ol.style.Style({
      //   stroke: new ol.style.Stroke({
      //     color: "orange",
      //     width: 3,
      //     // lineCap: "square",
      //     // lineJoin: "miter",
      //     //valor, espacio, valor, espacio
      //     lineDash: [15, 10, 1, 10],
      //   }),
      //   fill: new ol.style.Fill({
      //     color: "rgba(255, 165, 0, 0.3)",
      //   }),
      //   // image: new ol.style.Circle({
      //   //   stroke: new ol.style.Stroke({
      //   //     color:"orange",
      //   //     width: 3,
      //   //   }),
      //   //   radius: 8,
      //   //   fill: new ol.style.Fill({
      //   //     color: "rgba(255, 165, 0, 0.3)",
      //   //   }),
      //   // }),
      //   // image: new ol.style.RegularShape({
      //   //   points:4,
      //   //   radius:8,
      //   //   stroke: new ol.style.Stroke({
      //   //     //colores de los puntos
      //   //     color:"#218ddc",
      //   //     width: 3,
      //   //   }),
      //   //   fill: new ol.style.Fill({
      //   //     color: "rgba(255, 165, 0, 0.3)",
      //   //   }),
      //   //   rotation: 45,
      //   // })
      //   image: new ol.style.Icon({
      //     src: "img/icon/arbol.png",
      //     // color: "#5adc21"
      //   }),

      //   text: new ol.style.Text({
      //     text: "Objeto",
      //     offsetY: 20,
      //     scala: 1.5,
      //     stroke: new ol.style.Stroke({
      //       //colores de los puntos
      //       color: "#218ddc",
      //       width: 4,
      //     }),
      //     fill: new ol.style.Fill({
      //       color: "#020500",
      //     }),
      //   }),
      // }),
      style: estilos,
      title: "Áreas Naturales Protegidas",
      baseLayer: false,
      visible: true,
    }),
  ],
  view: new ol.View({
    center: new ol.proj.fromLonLat([-77.026211, -11.883041]),
    // center: [-8574529.390430272, -1332463.4945135845],
    zoom: 14,
    // minZoom: 12,
    // maxZoom: 17,
  }),
});

const layerSwitcher = new ol.control.LayerSwitcher({
  mouseover: true,
  trash: true,
  show_progress: true,
  oninfo: function (l) {
    console.log(l.get("title"));
  },
});

layerSwitcher.on("drawlist", function (e) {
  console.log(e);

  const layer = e.layer;

  // Crear el botón y agregar funcionalidad de clic
  $('<div>')
    .text("?")
    .on("click", function () {
      console.log(layer.get("title"));
    })
    .appendTo($(".ol-layerswitcher-buttons", e.li));
});

layerSwitcher.setHeader("<b>Capas</b>");

map.addControl(layerSwitcher);

geolocation.setProjection(map.getView().getProjection());
configurarEventos(map);

map.addControl(new PosicionActual(geolocation));

export { map };

// console.log(map.getView().getProjection());
