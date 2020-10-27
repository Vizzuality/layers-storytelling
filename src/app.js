import React, { useState, useRef, useEffect } from 'react';
import './app.css';
import Story from './components/story';
import providers from './map-providers';
import externalLayers from './map-external-layers';
import { transformRequest } from './utils';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { useScrollFunctionality } from './app-hooks';
import ReactMapGL, { Marker } from 'react-map-gl';

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

  useScrollFunctionality({
    loaded,
    map,
    chapters,
    showMarkers,
    setCurrentChapter,
    setMarkerPosition
  });

  const { id: currentChapterID } = currentChapter;
  const onLoad = () => {
    setLoaded(true);
  }

  return (
    <div>
      <Story
        chapters={chapters}
        title={title}
        subtitle={subtitle}
        byline={byline}
        theme={theme}
        alignments={alignments}
        alignment={alignment}
        currentChapterID={currentChapterID}
        footer={footer}
      />
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