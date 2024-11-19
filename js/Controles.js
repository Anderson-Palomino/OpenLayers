map.addControl(
    new ol.control.FullScreen({
      className: "proy-ol-full-screen",
      tipLabel: "Pantalla Completa",
    })
  );
  
  map.addControl(
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
    })
  );
  
  map.addControl(new ol.control.ScaleLine());
  
  map.addControl(
    new ol.control.ZoomToExtent({
      extent: [-8579669.444229325, -1337792.2620189576, -8576503.085002037,-1333335.0159590626],
      className: "proy-ol-zoom-extent", // Clase personalizada para estilos
      tipLabel: "Volver al inicio", // Etiqueta de herramienta
    })
  );