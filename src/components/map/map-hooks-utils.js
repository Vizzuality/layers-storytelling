export const layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity']
};

const getLayerPaintType = (layer, map) => {
  const mapLayer = map.getLayer(layer);
  if (!mapLayer) return [];
  const layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
};

const setLayerOpacity = (layer, map) => {
  const paintProps = getLayerPaintType(layer.layer, map);
  paintProps.forEach((prop) => {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
};

export const setOpacityOnAction = (
  chapter,
  action,
  map,
  externalLayersOpacity,
  setExternalLayersOpacity,
  externalLayersIds
) => {
  const updatedExternalLayersOpacity = { ...externalLayersOpacity };
  chapter[action].forEach((layer) => {
    if (externalLayersIds.includes(layer.layer)) {
      updatedExternalLayersOpacity[layer.layer] = layer.opacity;
    }
  });
  setExternalLayersOpacity(updatedExternalLayersOpacity);
  chapter[action]
    .filter((layer) => !externalLayersIds.includes(layer.layer))
    .forEach((layer) => setLayerOpacity(layer, map));
};
