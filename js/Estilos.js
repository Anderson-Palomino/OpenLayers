// Estilos.js
function estilos(feature) {
    console.log(feature);
  
    const formato = new ol.format.GeoJSON();
    const json = JSON.parse(formato.writeFeature(feature));
    console.log(json.geometry.type);
  
    // Estilo para puntos
    const stlPunto = new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/icon/arbol.png",
      }),
      text: new ol.style.Text({
        text: "Punto",
        offsetY: 20,
      }),
    });
  
    // Estilo para líneas
    const stlLinea = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "#fa4929",
        width: 5,
      }),
      text: new ol.style.Text({
        text: "Linea",
      }),
    });
  
    // Estilo para polígonos
    const stlPoligono = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "#3ac146",
        width: 5,
      }),
      fill: new ol.style.Fill({
        color: "#c6f8ca",
      }),
      text: new ol.style.Text({
        text: "Poligono",
      }),
    });
  
    var stl = new ol.style.Style({});
  
    switch (json.geometry.type) {
      case "LineString":
        stl = stlLinea;
        break;
      case "Polygon":
        stl = stlPoligono;
        break;
      case "Point":
        stl = stlPunto;
        break;
    }
    return stl;
  }
  
  // Exporta la función
  export default estilos;
  