export default [
  {
    id: 'mongabay-stories',
    name: 'Mongabay stories',
    type: 'geojson',
    source: {
      type: 'geojson',
      provider: {
        type: 'mongabay-stories',
        url:
          'https://wri-01.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20mongabay&format=geojson',
        options: {}
      }
    },
    render: {
      layers: [
        {
          type: 'circle',
          paint: {
            'circle-color': [
              'interpolate',
              ['exponential', 0.5],
              ['zoom'],
              3,
              '#e2714b',
              6,
              '#eee695'
            ],
            'circle-stroke-width': 1
          }
        }
      ]
    }
  }
];
