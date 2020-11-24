export default [{
    id: 'raster-test',
    type: 'layer',
    attributes: {
      name: 'Tree Cover Loss test',
      slug: 'Tree-Cover-Loss-test',
      dataset: '0448c79d-0ee0-42ff-9331-aeee70cef301',
      description:
        'Areas of gross tree cover loss from 2001 to 2009 with at least 30% canopy density.',
      application: ['rw'],
      iso: [],
      provider: 'leaflet',
      userId: '58fa22c54eecd907310778cd',
      default: false,
      protected: false,
      published: true,
      env: 'production',
      layerConfig: {
        type: 'tileLayer',
        service: 'leaflet',
        url:
          'https://production-api.globalforestwatch.org/v1/true-color-tiles/loss/{z}/{x}/{y}?startYear=2001&endYear=2009',
        body: {
          format: 'image/png',
          maxZoom: 13,
          attribution: '2016 wri/google/Hansen',
          transparent: true
        },
        timeline: true,
        order: 2009,
        dateTime: '2009-01-01',
        timelineLabel: '2009',
        layerType: 'raster'
      },
      legendConfig: {
        type: 'basic',
        items: [
          {
            name: 'Tree cover loss',
            color: '#DA6497'
          }
        ]
      },
      interactionConfig: {
        output: []
      },
      applicationConfig: {},
      staticImageConfig: {},
      createdAt: '2020-02-14T14:04:58.747Z',
      updatedAt: '2020-02-14T14:04:58.748Z'
    }
  },
  {
    id: 'carto-test',
    type: 'layer',
    attributes: {
      name: '2014 Overall Environmental Democracy Index Score',
      slug: 'overall-environmental-democracy-index-score',
      dataset: '0b9f0100-ce5b-430f-ad8f-3363efa05481',
      description:
        'The environmental democracy index aims to assess the state of national laws that protect transparency, participation, and justice in environmental decision-making. The index is calculated by combining 75 legal indicators that are scored on a range from 0 (worst) to 3 (best), producing an overall score that falls within this same range. These indicators test both the extent of provisions that promote environmental democracy as well as the ability to enforce these provisions as a legal right for the public. The data being shown represent the laws in place in 2014.',
      application: ['rw'],
      iso: [],
      provider: 'cartodb',
      type: 'layer',
      userId: '5980838ae24e6a1dae3dd446',
      default: true,
      protected: false,
      published: true,
      env: 'production',
      layerConfig: {
        body: {
          layers: [
            {
              options: {
                cartocss_version: '2.3.0',
                cartocss:
                  '#edi {polygon-opacity:1; line-width:0.5; line-color:#FFF; line-opacity:1;} [overall_score>=2.5]{polygon-fill:#016c59;} [overall_score>=2][overall_score<2.5]{polygon-fill:#1c9099;} [overall_score>=1.5][overall_score<2]{polygon-fill:#67a9cf;} [overall_score>=1][overall_score<1.5]{polygon-fill:#a6bddb;}[overall_score>=0.5][overall_score<1]{polygon-fill:#d0d1e6;}[overall_score>=0][overall_score<0.5]{polygon-fill:#f6eff7;}',
                sql: 'SELECT * FROM edi'
              },
              type: 'cartodb'
            }
          ],
          minzoom: 0,
          maxzoom: 18,
          vectorLayers: [
            {
              paint: {
                'fill-color': [
                  'step',
                  ['to-number', ['get', 'overall_score']],
                  '#f6eff7',
                  0.5,
                  '#d0d1e6',
                  1,
                  '#a6bddb',
                  1.5,
                  '#67a9cf',
                  2,
                  '#1c9099',
                  2.5,
                  '#016c59'
                ],
                'fill-opacity': 1
              },
              'source-layer': 'layer0',
              type: 'fill',
              filter: ['all']
            },
            {
              paint: {
                'line-width': 0.5,
                'line-color': '#fff',
                'line-opacity': 0.8
              },
              'source-layer': 'layer0',
              type: 'line',
              filter: ['all']
            }
          ]
        },
        account: 'insights',
        layerType: 'vector'
      },
      legendConfig: {
        type: 'choropleth',
        items: [
          {
            name: '<0.5',
            color: '#f6eff7',
            id: 0
          },
          {
            name: '<1.0',
            color: '#d0d1e6',
            id: 1
          },
          {
            name: '<1.5',
            color: '#a6bddb',
            id: 2
          },
          {
            name: '<2.0',
            color: '#67a9cf',
            id: 3
          },
          {
            name: '<2.5',
            color: '#1c9099',
            id: 4
          },
          {
            color: '#016c59',
            name: '<3',
            id: 5
          }
        ]
      },
      interactionConfig: {
        output: [
          {
            column: 'country',
            format: null,
            prefix: '',
            property: 'Country',
            suffix: '',
            type: 'string'
          },
          {
            column: 'overall_score',
            format: null,
            prefix: '',
            property: 'Environmental Democracy Index',
            suffix: '',
            type: 'number'
          }
        ]
      },
      applicationConfig: {},
      staticImageConfig: {},
      createdAt: '2017-09-13T14:24:32.159Z',
      updatedAt: '2020-05-18T03:55:30.562Z'
    }
  }
];