import get from 'lodash/get';

export const transformRequest = (url) => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery
    ? '&pluginName=journalismScrollytelling'
    : '?pluginName=journalismScrollytelling';
  return {
    url: url + suffix
  };
};

// Layer parsing

const v3Templates = {
  tiles:
    {
      type: 'raster',
      source: {
        type: 'raster',
        tiles: [],
        'minzoom': 2,
        'maxzoom': 12
      }
    },
  carto:
    {
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
  const provider = get(layerConfig, 'attributes.layerConfig.source.provider.type') || get(layerConfig, 'attributes.provider');
  return provider
}

// const parseCarto = (layerConfig) => {
//   const updatedConfig = { ...v3Templates.carto };
//   updatedConfig.source.provider.account = layerConfig.account
//   return layerConfig;
// };

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
    const paramsConfig = layerConfig.params_config.map(param => {
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
    // mapnik: parseCarto,
    // carto: parseCarto,
    leaflet: parseTiles,
    raster: parseTiles
  };
  if (provider || providerParsers[provider]) {
    return providerParsers[provider](v2Config)
  }
  return v2Config;
}

const needsParsing = (layerConfig) => !layerConfig.source;

export const parsedLayerConfig = (layerConfig) => {
  if (!needsParsing(layerConfig)) return layerConfig;
  return layerV2ToV3Parser(layerConfig);
};
