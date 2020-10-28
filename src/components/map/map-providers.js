import omit from 'lodash/omit';
import { fetch } from 'layer-manager';

export default {
  'mongabay-stories': (layerModel, layer, resolve, reject) => {
    const { source } = layerModel;
    const { provider } = source;

    fetch('get', provider.url, provider.options, layerModel)
      .then((response) => {
        if (!response) return;
        return resolve({
          ...layer,
          source: {
            ...omit(layer.source, 'provider'),
            data: {
              type: 'FeatureCollection',
              features: response.features
            }
          }
        });
      })
      .catch((e) => {
        reject(e);
      });
  }
};
