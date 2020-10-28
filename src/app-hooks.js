import { useEffect } from 'react';
import scrollama from 'scrollama';

const layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity']
};

export const useScrollFunctionality = ({
  loaded,
  map,
  chapters,
  showMarkers,
  setCurrentChapter,
  setMarkerPosition,
  setExternalLayersOpacity,
  externalLayersOpacity
}) => {
  useEffect(() => {
    const getLayerPaintType = (layer) => {
      var layerType = map.getLayer(layer).type;
      return layerTypes[layerType];
    }

    const setLayerOpacity = (layer) => {
      var paintProps = getLayerPaintType(layer.layer);
      paintProps.forEach((prop) => {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
      });
    }

    const setOpacityOnAction = (chapter, action) => {
      console.log(chapter[action])
      const updatedExternalLayersOpacity = { ...externalLayersOpacity };
      chapter[action]
        .forEach((layer) => {
          if (layer.external) {
            updatedExternalLayersOpacity[layer.layer] = layer.opacity;
          }
        });
        setExternalLayersOpacity(updatedExternalLayersOpacity);
        chapter[action]
          .filter((layer) => !layer.external)
          .forEach((layer) => setLayerOpacity(layer));
    };

    if (loaded && map) {
      const scroller = scrollama();
      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true
        })
        .onStepEnter((response) => {
          const chapter = chapters.find((c) => c.id === response.element.id);
          setCurrentChapter(chapter);
          map.flyTo(chapter.location);
          if (showMarkers) {
            const [markerLatitude, markerLongitude] = chapter.location.center;
            setMarkerPosition({
              latitude: markerLatitude,
              longitude: markerLongitude
            });
          }
          setOpacityOnAction(chapter, 'onChapterEnter');
        })
        .onStepExit((response) => {
          const chapter = chapters.find((chapter) => chapter.id === response.element.id);
          setOpacityOnAction(chapter, 'onChapterExit');
        });

        window.addEventListener('resize', scroller.resize);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, map]);
};
