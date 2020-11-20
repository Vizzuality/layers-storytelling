const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/ckeogv8t81ff619mx5jl1yshj',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Title',
    subtitle: 'Subtitle',
    date: 'Nov. 16 2020',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'ADD TWITTER LINK'
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'ADD FACEBOOK LINK'
      }
    ]
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com'
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com'
    }
  ],
  alignment: 'left',
  footer: 'ADD FOOTER',
  chapters: [
    {
      id: 'amazon-region',
      title: 'Turning the Amazon river into an industrial waterway',
      legend: [
        {
          title: 'Industrial port facilities in the Amazon basin',
          color: '#7259A8',
          border: 'black',
          type: 'circle'
        },
        {
          title: 'Soy Storage Facilities',
          color: '#BAA4F5',
          type: 'circle'
        }
      ],
      sources: 'ANTAQ (Ports), Trase.earth (storage facilities)',
      images: [
        {
          src: 'port1.jpg',
          position: 'top',
          title: 'Santarém port',
          author: 'Thais Borges'
        }
      ],
      description:
        'Brazil’s government has had major plans to exploit large portions of its 35,000-kilometers (22,000-miles) of waterways since the 1970s. Yet, it was mostly privately funded projects that went ahead. Today, the nation’s navigable waterways represent a third of its potential.',
      location: {
        center: [-57.15869, -3.85456],
        zoom: 4.7,
        pitch: 43.5,
        bearing: 54.23
      },
      onChapterEnter: [
        {
          layer: 'amazon-ports',
          opacity: 1
        },
        {
          layer: 'soy-storage-facilities',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'soy-storage-facilities',
          opacity: 0.3
        }
      ]
    }
  ]
};
