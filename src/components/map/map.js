import React, { useState, useRef, useEffect } from 'react';
import providers from './map-providers';
import externalLayers from './map-external-layers';
import { transformRequest, parsedLayerConfig } from './map-utils';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import { useScrollFunctionality, useHandleResize } from './map-hooks';
import ReactMapGL, { Marker } from 'react-map-gl';

const parsedExternalLayers = externalLayers.map((layerConfig) => parsedLayerConfig(layerConfig));

const Map = (props) => {
  const {
    chapters,
    accessToken,
    mapStyle,
    showMarkers,
    currentChapterId,
    currentAction
  } = props;

  const [loaded, setLoaded] = useState(false);
  const [externalLayersOpacity, setExternalLayersOpacity] = useState({});
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const initialLocation = chapters[0].location;
  const [initialLongitude, initialLatitude] = initialLocation.center;
  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialLatitude,
    longitude: initialLongitude
  });
  const initialViewport = {
    longitude: initialLongitude,
    latitude: initialLatitude,
    pitch: initialLocation.pitch,
    bearing: initialLocation.bearing,
    zoom: initialLocation.zoom
  };
  const [viewport, setViewport] = useState(initialViewport);
  const updateViewport = newViewport => setViewport({ ...viewport, ...newViewport });

  useHandleResize(updateViewport);

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
    currentChapterId,
    currentAction,
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
        onViewportChange={updateViewport}
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
                {...parsedExternalLayers.find((l) => l.id === layerId)}
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