import React, { useState, useRef, useEffect } from 'react';
import './app.css';
import scrollama from 'scrollama';
import Chapter from './components/chapter'
import providers from './map-providers';
import externalLayers from './map-external-layers';
import { transformRequest } from './utils';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import ReactMapGL, { Marker } from 'react-map-gl';

const layerTypes = {
  'fill': ['fill-opacity'],
  'line': ['line-opacity'],
  'circle': ['circle-opacity', 'circle-stroke-opacity'],
  'symbol': ['icon-opacity', 'text-opacity'],
  'raster': ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity']
}

const alignments = {
  'left': 'lefty',
  'center': 'centered',
  'right': 'righty'
}

const App = (props) => {
  const { chapters, accessToken, style, theme, showMarkers, title, subtitle, byline, alignment, footer } = props;
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [loaded, setLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const initialLocation = chapters[0].location;
  const [initialLatitude, initialLongitude] = initialLocation.center;
  const [markerPosition, setMarkerPosition] = useState({ latitude: initialLatitude, longitude: initialLongitude });
  const initialViewport = {
    latitude: initialLatitude,
    longitude: initialLongitude,
    pitch: initialLocation.pitch,
    bearing: initialLocation.bearing,
    zoom: initialLocation.zoom
  };
  const [viewport, setViewport] = useState(initialViewport);

  // Set map when loaded
  useEffect(() => {
    if (loaded && mapRef.current) {
      setMap(mapRef.current.getMap());
    }
    return undefined;
  }, [mapRef, loaded, setMap]);

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
            setMarkerPosition({ latitude: markerLatitude , longitude: markerLongitude });
          }
          chapter.onChapterEnter.filter((layer) => !layer.external).forEach((layer) =>
            setLayerOpacity(layer)
          );
        })
        .onStepExit((response) => {
          var chapter = chapters.find((chapter) => chapter.id === response.element.id);
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

  const { id: currentChapterID } = currentChapter;
  const onLoad = () => {
    setLoaded(true);
  }

  return (
    <div>
      <div id="story">
        {title && (
          <div id="header" className={theme}>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {byline && <p>{byline}</p>}
          </div>
        )}
        <div id="features" className={alignments[alignment]}>
          {chapters.map((chapter) => (
            <Chapter
              key={chapter.id}
              theme={theme}
              {...chapter}
              currentChapterID={currentChapterID}
            />
          ))}
        </div>
        {footer && (
          <div id="footer" className={theme}>
            <p>{footer}</p>
          </div>
        )}
      </div>
      <div ref={mapContainerRef} className="mapboxgl-map">
        <ReactMapGL
          ref={mapRef}
          width="100%"
          height="100%"
          mapboxApiAccessToken={accessToken}
          mapStyle={style}
          transformRequest={transformRequest}
          onLoad={onLoad}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          scrollZoom={false}
          dragPan={false}
          dragRotate={false}
          doubleClickZoom={false}
          {...viewport}
        >
          {showMarkers && (
            <Marker
              longitude={markerPosition.longitude}
              latitude={markerPosition.latitude}
            />
          )}
          {loaded && mapRef.current && (
            <LayerManager
              map={mapRef.current.getMap()}
              plugin={PluginMapboxGl}
              providers={providers}
            >
              {externalLayers.map((layer) => (
                <Layer key={layer.id} {...layer} />
              ))}
            </LayerManager>
          )}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default App;