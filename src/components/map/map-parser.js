import get from 'lodash/get';

const v3Templates = {
  tiles: {
    type: 'raster',
    source: {
      type: 'raster',
      tiles: [],
      minzoom: 2,
      maxzoom: 12
    }
  },
  carto: {
    type: 'vector',
    version: '3.0',
    source: {
      type: 'vector',
      provider: {
        type: 'carto',
        account: null,
        layers: [
          {
            options: {
              sql: null
            },
            type: 'cartodb'
          }
        ]
      }
    },
    render: {
      layers: []
    }
  }
};

export const getProvider = (layerConfig) => {
  const provider =
    get(layerConfig, 'attributes.layerConfig.source.provider.type') ||
    get(layerConfig, 'attributes.provider');
  return provider;
};

const parseCarto = (layer) => {
  const updatedConfig = { id: layer.id, ...v3Templates.carto };
  const layerConfig = layer.attributes.layerConfig;
  updatedConfig.source.provider.account = layerConfig.account;
  const layers = get(layerConfig, 'body.layers');
  updatedConfig.source.provider.layers = layers.map((l) => ({
    options: { sql: l.options.sql },
    type: 'cartodb'
  }));
  updatedConfig.render.layers = get(layerConfig, 'body.vectorLayers');
  if (get(layerConfig, 'params_config')) {
    updatedConfig.params_config = layerConfig['params_config'];
  }
  if (get(layerConfig, 'sql_config')) {
    updatedConfig.sql_config = layerConfig['sql_config'];
  }
  if (get(layerConfig, 'timelineConfig')) {
    updatedConfig.timeline_config = layerConfig['timelineConfig'];
  }
  if (get(layerConfig, 'timeline_config')) {
    updatedConfig.timeline_config = layerConfig['timeline_config'];
  }
  if (get(layerConfig, 'decodeConfig')) {
    updatedConfig.decode_config = layerConfig['decodeConfig'];
  }
  if (get(layerConfig, 'decode_config')) {
    updatedConfig.decode_config = layerConfig['decode_config'];
  }

  return updatedConfig;
};

const parseTiles = (layer) => {
  const updatedConfig = { id: layer.id, ...v3Templates.tiles };
  const layerConfig = layer.attributes.layerConfig;
  const url = get(layerConfig, 'body.url') || layerConfig.url;
  if (url) {
    updatedConfig.source.tiles = [url];
  }
  if (layerConfig.body.minZoom) {
    updatedConfig.source.minzoom = get(layerConfig, 'body.minZoom');
  }
  if (layerConfig.body.maxZoom) {
    updatedConfig.source.maxzoom = get(layerConfig, 'body.maxZoom');
  }

  if (layerConfig.params_config) {
    const paramsConfig = layerConfig.params_config.map((param) => {
      const updatedParam = { ...param };
      if (updatedParam.dataMaxZoom) {
        delete updatedParam.dataMaxZoom;
      }
      return updatedParam;
    });
    updatedConfig.params_config = paramsConfig;
  }

  if (layerConfig.timeline_config) {
    updatedConfig.timeline_config = layerConfig.timeline_config;
  }

  if (layerConfig.decode_config) {
    updatedConfig.decode_config = layerConfig.decode_config;
  }

  return updatedConfig;
};

export const layerV2ToV3Parser = (v2Config) => {
  const provider = getProvider(v2Config);
  const providerParsers = {
    mapnik: parseCarto,
    carto: parseCarto,
    cartodb: parseCarto,
    leaflet: parseTiles,
    raster: parseTiles
  };
  if (provider && providerParsers[provider]) {
    return providerParsers[provider](v2Config);
  } else {
    console.warn(
      `Layer ${v2Config.id} with provider ${provider} does not have a valid parser`
    );
  }
  return v2Config;
};

const needsParsing = (layerConfig) => !get(layerConfig, 'attributes.layerConfig.source');

export const parsedLayerConfig = (layerConfig) => {
  if (!needsParsing(layerConfig)) return layerConfig;
  return layerV2ToV3Parser(layerConfig);
};
