import React, { useState, useRef, useEffect } from 'react';
import providers from './map-providers';
import externalLayers from './map-external-layers';
import { transformRequest } from './map-utils';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { useScrollFunctionality } from './map-hooks';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = (props) => {
  const { chapters, accessToken, mapStyle, showMarkers, setCurrentChapter } = props;
  const [loaded, setLoaded] = useState(false);
  const [externalLayersOpacity, setExternalLayersOpacity] = useState({});
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const initialLocation = chapters[0].location;
  const [initialLatitude, initialLongitude] = initialLocation.center;
  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialLatitude,
    longitude: initialLongitude
  });
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
    setMarkerPosition,
    setExternalLayersOpacity,
    externalLayersOpacity,
    externalLayers
  });
  return (
    <div ref={mapContainerRef} className="mapboxgl-map">
      <ReactMapGL
        ref={mapRef}
        width="100%"
        height="100%"
        mapboxApiAccessToken={accessToken}
        mapStyle={mapStyle}
        transformRequest={transformRequest}
        onLoad={() => setLoaded(true)}
        onViewportChange={setViewport}
        onResize={setViewport}
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
          <LayerManager // Only for external layers
            map={mapRef.current.getMap()}
            plugin={PluginMapboxGl}
            providers={providers}
          >
            {Object.keys(externalLayersOpacity).map((layerId) => (
              <Layer
                key={layerId}
                {...externalLayers.find((l) => l.id === layerId)}
                opacity={externalLayersOpacity[layerId]}
              />
            ))}
          </LayerManager>
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;