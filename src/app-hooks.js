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

export const useScrollFunctionality = ({ loaded, map, chapters, showMarkers, setCurrentChapter, setMarkerPosition }) => {
  useEffect(() => {
  function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
  }

  function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
      map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
  }

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
        chapter.onChapterEnter
          .filter((layer) => !layer.external)
          .forEach((layer) => setLayerOpacity(layer));
      })
      .onStepExit((response) => {
        var chapter = chapters.find(
          (chapter) => chapter.id === response.element.id
        );
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit
            .filter((layer) => !layer.external)
            .forEach(setLayerOpacity);
        }
      });
    window.addEventListener('resize', scroller.resize);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [loaded, map]);

}
