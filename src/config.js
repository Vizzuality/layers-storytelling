const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/ckeogv8t81ff619mx5jl1yshj',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Amazon Soy Ports',
    subtitle:
      'Investors are sinking hundreds of millions of dollars into private port facilities along the Amazon river and its tributaries to move agricultural commodities downriver from Brazil’s interior to the Atlantic coast and on to overseas markets',
    date: 'Nov. 10 2020',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://twitter.com/mongabay'
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://facebook.com/mongabay'
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
      name: 'dialogochino',
      src: 'DC_logo.png',
      width: '140',
      href: 'https://dialogochino.net'
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com'
    }
  ],
  alignment: 'left',
  footer: 'Cartography by Willie Shubert for Mongabay.',
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
    },
    {
      id: 'amazon-region-2',
      title: 'Following the road north',
      legend: [
        {
          title: 'Tree cover loss 2001-2019',
          color: '#DC6B9C'
        },
        {
          title: 'Indigenous territories',
          color: '#46B6D2'
        }
      ],
      sources:
        'UMD/Google/USGS/NASA (Tree cover loss), Global Forest Watch. "Land rights"',
      description:
        'The northward expansion of Amazon roadbuilding over recent decades opened truck/barge transit corridors to the Amazon River and Atlantic Ocean that run adjacent to Indigenous territories and cause deforestation. However, these northern routes, do let agribusiness bypass a long, rugged road journey, and the queues of trucks clogging Brazil’s southern ports at Paranaguá and Santos.',
      location: {
        center: [-57.15869, -3.85456],
        zoom: 4.7,
        pitch: 43.5,
        bearing: 54.23
      },
      onChapterEnter: [
        {
          layer: 'Land-rights_1',
          opacity: 1
        },
        {
          layer: 'Tree-cover-loss-2001-2019',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'Land-rights_1',
          opacity: 0
        },
        {
          layer: 'Tree-cover-loss-2001-2019',
          opacity: 0.3
        }
      ]
    },
    {
      id: 'cerrado',
      title: 'An agricultural heartland to the south',
      description: 'In July 2006, major commodities companies working in Brazil voluntarily agreed to cease purchases of soy produced in any Amazon area deforested after that year. The Amazon Soy Moratorium was hugely successful, but critics say saving the rainforest was only possible because soy production shifted to the vast Cerrado savanna, which lies to the south and east of the Amazon basin.',
      location: {
        center: [-52.74787, -14.10557],
        zoom: 4.63,
        pitch: 48.5,
        bearing: 29.42
      },
      legend: [
        {
          title: 'Cerrado biome boundary',
          color: '#F6E8A8'
        },
        {
          title: 'Amazon biome boundary',
          color: '#92CE69'
        }
      ],
      sources: 'Brazilian Ministry of Environment / IGBE',
      images: [
        {
          src: 'cerrado_soy.png',
          position: 'top',
          title: 'Soy and its storage',
          author: 'Thais Borges'
        }
      ],
      onChapterEnter: [
        {
          layer: 'brazilbiomes-8y9982',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'brazilbiomes-8y9982',
          opacity: 0.2
        },
        {
          layer: 'Tree-cover-loss-2001-2019',
          opacity: 0
        }
      ]
    },
    {
      id: 'cerrado-2',
      title: 'A forgotten biodiversity hotspot',
      description:
        'Half of the Cerrado biome, one of the earth’s top biodiversity hotspots, has already been lost to cattle ranches and soy, corn and cotton plantations. Today, the savanna is losing its native vegetation faster than any part of Brazil, including the Amazon.',
      location: {
        center: [-52.74787, -14.10557],
        zoom: 4.63,
        pitch: 48.5,
        bearing: 29.42
      },
      legend: [
        {
          title: 'Pasture lands in the Cerrado biome (2018)',
          color: '#b1a51b'
        },
        {
          title: 'Soy fields in the Cerrado biome (2014)',
          color: '#ff6c2f'
        },
        {
          title: 'Corn fields in the Cerrado biome (2014)',
          color: '#cc607d'
        },
        {
          title: 'Cotton fields in the Cerrado biome (2014)',
          color: '#ffcc3e'
        },
      ],
      sources: 'Image Processing and Geoprocessing Laboratory (LAPIG) at the Federal University of Goiás (UFG)',
      onChapterEnter: [
        {
          layer: 'pasture-cerrado-2018',
          opacity: 1
        },
        {
          layer: 'agricultura-agrosatelite-2014',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'brazilbiomes-8y9982',
          opacity: 0
        },
        {
          layer: 'agricultura-agrosatelite-2014',
          opacity: 0
        },
        {
          layer: 'pasture-cerrado-2018',
          opacity: 0
        }
      ]
    },
    {
      id: 'velho',
      title: 'Porto Velho',
      image: '',
      description:
        'Soy-loaded trucks travel from Mato Grosso state 1,000 kilometers (600 miles) along the BR-364 highway to the city of Porto Velho public port in Rondônia state. There, Hermasa, a subsidiary of agribusiness Amaggi, built silos in a leased portion of the public port, and moved soy from trucks to Madeira River barges. More recently, Hermasa built its own private port in the city. From Porto Velho, barges sail 1,000 kilometers downstream to a private Amaggi port at the city of Itacoatiara. From there, big ships travel downriver to the Atlantic coast and on to overseas markets.',
      location: {
        center: [-63.87170, -8.79644],
        zoom: 8.52,
        pitch: 50.50,
        bearing: 40.11
      },
      images: [
        {
          src: 'barge.png',
          position: 'top',
          title: 'Grain barge',
          author: 'Thais Borges'
        }
      ],
      onChapterEnter: [
        {
          layer: 'Land-rights_1',
          opacity: 0.3
        },
        {
          layer: 'Tree-cover-loss-2001-2019',
          opacity: 0.3
        }
      ],
      onChapterExit: []
    },
    {
      id: 'itaituba',
      title: 'Itaituba',
      image: '',
      description:
        'Since the passage of a 2013 law that enabled the creation of private river ports, at least ten industrial complexes have been built around the city of Itaituba in Pará state, in a transportation hub linking the BR-163 highway with the Tapajós River. Most are connected to agribusiness commodities giants. Cargill, Hidrovias do Brasil, Cianport and Unitapajós (a joint-venture between Bunge and Amaggi) own and operate the main ports. Together, the companies have invested over US$150 million in these private facilities.',
      location: {
        center: [-56.39726, -3.78364],
        zoom: 7.51,
        pitch: 53.0,
        bearing: 47.18
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'santarem',
      title: 'Santarém',
      image: '',
      description:
        'Five mostly agribusiness companies are eyeing the Maicá Lake, near the port complex of Santarém, Pará state,  as the next target for port development in the region. Some port projects have stalled after intense resistance by activists over the last seven years, but one has been built; a fuel port. However, the company responsible, Atem’s, lacked the required permits and in March, prosecutors filed criminal charges against the firm.',
      location: {
        center: [-54.65835, -2.37194],
        zoom: 10.2,
        pitch: 60.0,
        bearing: 101.56
      },
      images: [
        {
          src: 'maica.png',
          position: 'top',
          title: 'Maicá Lake',
          author: 'Carol Ferraz'
        }
      ],
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'barcarena ',
      title: 'Barcarena',
      image: '',
      description:
        'Pará state’s Barcarena complex began with the public Vila do Conde port, established in 1985. It was built to respond to demand from the region’s mining companies, including Vale, Brazil’s largest mining firm. In the 2000’s, Barcarena’s river port complex began to receive increased demand from agribusiness, as it sought a route through the Amazon.',
      location: {
        center: [-48.67775, -1.52281],
        zoom: 11.17,
        pitch: 24.0,
        bearing: -7.2
      },
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};
