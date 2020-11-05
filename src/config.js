const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/ckeogv8t81ff619mx5jl1yshj',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Amazon Soy Ports',
    subtitle:
      'Amazon Soy Ports subtitle - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue ut nunc vel ultrices. Mauris diam mi, tincidunt sed odio sed, hendrerit tincidunt mauris. Proin consequat tellus id odio elementum, vestibulum laoreet justo dignissim.',
    date: 'Nov. 10 2020'
  },
  logos: [
    {
      name: 'mongabay',
      src: 'logos.png',
      width: '200' // optional
    }
  ],
  alignment: 'left',
  title: '',
  subtitle: '',
  byline: '',
  footer: 'Cartography by Willie Shubert for Mongabay.',
  chapters: [
    {
      id: 'amazon-region',
      title: 'Turning the Amazon river into an industrial waterway',
      images: [
        {
          src: 'frog.png',
          position: 'top',
          title: 'frog',
          author: 'Mongabay',
          whiteLegend: true
        },
        { src: 'chapter1_legend.png', position: 'bottom' }
      ],
      description:
        'Brazil’s government has had major plans to exploit large portions of its 35,000-kilometers (22,000-miles) of waterways since the 1970s. But it was mostly privately funded projects that went ahead, with just a third of the nation’s navigable waterway potential now fulfilled.',
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
      image: 'chapter2_legend.png',
      description:
        'The northward expansion of Amazon roadbuilding over recent decades opened truck/barge transit corridors to the Amazon River and Atlantic Ocean, but which run adjacent to Indigenous territories and cause deforestation. Northern routes do let agribusiness bypass a long, rugged road journey, and queues of trucks clogging Brazil’s southern ports at Paranaguá and Santos',
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
        // {
        //     layer: 'amazon-ports',
        //     opacity: 0
        // }
      ]
    },
    {
      id: 'cerrado',
      title: 'An agricultural heartland to the south',
      image: 'chapter3_legend.png',
      description:
        'In July 2006, major commodities companies working in Brazil voluntarily agreed to not buy soy from any Amazon area deforested after that year. This Amazon Soy Moratorium was hugely successful, but critics say saving the rainforest was only possible because soy production was shifted to the vast Cerrado savanna biome, lying to the east and south of the Amazon basin.',
      location: {
        center: [-52.74787, -14.10557],
        zoom: 4.63,
        pitch: 48.5,
        bearing: 29.42
      },
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
        }
      ]
    },
    {
      id: 'cerrado-2',
      title: 'A forgotten biodiversity hotspot',
      image: 'chapter4_legend.png',
      description:
        'Half of the Cerrado biome, one of the earth’s top biodiversity hotspots, has already been lost to cattle ranches and soy, corn and cotton plantations. Today, the savanna is losing its native vegetation faster than any part of Brazil, including the Amazon.',
      location: {
        center: [-52.74787, -14.10557],
        zoom: 4.63,
        pitch: 48.5,
        bearing: 29.42
      },
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
        'Soy-loaded trucks travel from Mato Grosso state 1,000 kilometers (600 miles) along the BR-364 highway to the city of Porto Velho public port in Rondônia state. There, Hermasa, an Amaggi subsidiary, built silos in a leased portion of the public port, and moved soy from trucks to Madeira River barges. More recently, Hermasa built its own private port in the city. From Porto Velho, barges sail 1,000 kilometers downstream to a private Amaggi port at the city of Itacoatiara. From there, big ships go downriver to the Atlantic coast and on to other nations.',
      location: {
        center: [-63.86148, -8.81658],
        zoom: 7.73,
        pitch: 60.0,
        bearing: 51.99
      },
      onChapterEnter: [
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
        'Since the passage of a 2013 law that allowed the creation of private river ports, at least ten industrial ports, mostly connected to agribusiness commodities giants, have been built around the city of Itaituba in Pará state, in a transportation hub linking the BR-163 highway with the Tapajós River. The most important ports for agribusiness are owned and operated by Cargill, Hidrovias do Brasil, Cianport and Unitapajós (a joint-venture between Bunge and Amaggi). Together, the companies have invested over US$150 million in these private facilities.',
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
        'The Maicá Lake, near the port complex of Santarém, in Pará state, has been eyed by five mostly agribusiness companies as the next target for port development in the region. Some port projects have stalled after intense resistance by activists over the last seven years, but one has been built, a fuel port. However, the company responsible, Atem’s, lacked the required permits, so, in March, prosecutors filed criminal charges against the firm’s representatives.',
      location: {
        center: [-54.65835, -2.37194],
        zoom: 10.2,
        pitch: 60.0,
        bearing: 101.56
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'barcarena ',
      title: 'Barcarena',
      image: '',
      description:
        'Pará state’s Barcarena port complex began with the public port of Vila do Conde, established in 1985. It was built to answer demands from the region’s mining companies, including Vale, Brazil’s largest mining firm. In the 2000’s, Barcarena’s river port complex received increased demand from agribusiness, as commodities firms established a route through the Amazon.',
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
