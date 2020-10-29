import { setOpacityOnAction, layerTypes } from './map-hooks-utils.js';

const mockSetExternalLayersOpacity = jest.fn();
const mockSetPaintProperty = jest.fn();
const mockGetLayer = jest.fn(() => ({ type: Object.keys(layerTypes)[0]})); // Just pick the first one
const mockMap = {
  getLayer: mockGetLayer,
  setPaintProperty: mockSetPaintProperty
};

const initialExternalLayersOpacity = [];
const action = 'onChapterEnter';
const mapboxLayerId = 'mapbox-layer-id';
const externalLayerId = 'external-layer-id';
const chapter = {
  id: 'chapter',
  onChapterEnter: [
    {
      layer: externalLayerId,
      opacity: 1
    },
    {
      layer: mapboxLayerId,
      opacity: 1
    }
  ]
};

const externalLayersOpacity = { [externalLayerId]: 1 };
describe('setOpacityOnAction', () => {
  it('uses callbacks to set opacity to layer', () => {
    setOpacityOnAction(chapter, action, mockMap, initialExternalLayersOpacity, mockSetExternalLayersOpacity, [externalLayerId])
    expect(mockSetExternalLayersOpacity).toHaveBeenCalledWith(externalLayersOpacity);
    expect(mockSetPaintProperty).toHaveBeenCalledWith(mapboxLayerId, "fill-opacity", 1);
  });
})