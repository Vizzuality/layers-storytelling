import React, { useState, useRef, useEffect } from 'react';
import './app.css';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import { transformRequest } from './utils';

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

function Chapter({ id, theme, title, image, description, currentChapterID }) {
  const classList = id === currentChapterID ? 'step active' : 'step';
  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {title && <h3 className="title">{title}</h3>}
        {image && <img src={image} alt={title}></img>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

const App = (props) => {
  const { chapters, accessToken, style, theme, showMarkers, title, subtitle, byline, alignment, footer } = props;
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const mapStart = chapters[0].location;

    mapboxgl.accessToken = accessToken;
    const mapContainer = mapContainerRef && mapContainerRef.current;
    const map = new mapboxgl.Map({
      container: mapContainer,
      style,
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing,
      transformRequest: transformRequest
    });

    const marker = new mapboxgl.Marker();
    if (showMarkers) {
      marker.setLngLat(mapStart.center).addTo(map);
    }

    function getLayerPaintType(layer) {
      var layerType = map.getLayer(layer).type;
      return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
      var paintProps = getLayerPaintType(layer.layer);
      paintProps.forEach(function(prop) {
          map.setPaintProperty(layer.layer, prop, layer.opacity);
      });
    }

    // instantiate the scrollama
    const scroller = scrollama();

    map.on('load', function () {
      scroller
      .setup({
        step: '.step',
        offset: 0.5,
        progress: true
      })
      .onStepEnter(response => {
        const chapter = chapters.find(c => c.id === response.element.id);
        setCurrentChapter(chapter);
        map.flyTo(chapter.location);
        if (showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            // const externalLayers = chapter.onChapterEnter.filter(layer => layer.type);
            // TODO: Add externalLayers to map
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
      })
      .onStepExit(response => {
        var chapter = chapters.find(chap => chap.id === response.element.id);
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });
    });

    window.addEventListener('resize', scroller.resize);
  }, []);

  const { id: currentChapterID } = currentChapter;

  return (
    <div>
      <div ref={mapContainerRef} className="absolute top right left bottom" />
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
    </div>
  );
};

export default App;