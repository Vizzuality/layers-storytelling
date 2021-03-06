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
      title: 'Test',
      image: '',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [-58.0283, -2.7068],
        zoom: 4.42,
        pitch: 0.0,
        bearing: -8.78
      },
      onChapterEnter: [
        {
          layer: 'tree-cover',
          opacity: 1
        },
        {
          layer: 'overall-environmental-democracy-index-score',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'tree-cover',
          opacity: 0
        },
        {
          layer: 'overall-environmental-democracy-index-score',
          opacity: 0
        }
      ]
    },
    {
      id: 'amazon-logistics',
      title: 'Logistics hubs in the Amazon',
      image: '',
      description:
        'in July 2006, in an agreement between major trading companies working in Brazil that they would not buy soy from any area that was deforested after 2006. This agreement is the Soy Moratorium. The program was hugely successful but critics say this transformation was only possible because the Cerrado biome, which enjoys fewer protections, was right next to the forest. and could take in the growth that would otherwise have spread through the rainforest.',
      location: {
        center: [-56.67828, -5.98458],
        zoom: 5.09,
        pitch: 40.5,
        bearing: -22.38
      },
      onChapterEnter: [
        {
          layer: 'soy-storage-facilities',
          opacity: 1
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
      onChapterExit: [
        {
          layer: 'soy-storage-facilities',
          opacity: 0.3
        }
      ]
    }
  ]
};
