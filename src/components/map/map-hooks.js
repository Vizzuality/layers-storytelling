import { useEffect } from 'react';
import scrollama from 'scrollama';
import { setOpacityOnAction } from './map-hooks-utils';

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
          setOpacityOnAction(chapter, 'onChapterEnter', map, externalLayersOpacity, setExternalLayersOpacity);
        })
        .onStepExit((response) => {
          const chapter = chapters.find((chapter) => chapter.id === response.element.id);
          setOpacityOnAction(chapter, 'onChapterExit', map, externalLayersOpacity, setExternalLayersOpacity);
        });

        window.addEventListener('resize', scroller.resize);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, map]);
};
