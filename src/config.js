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
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: 'Pistas aéreas detectadasd',
      image: './path/to/image/source.png',
      description: 'El algoritmo de inteligencia artificial detectó 76 pistas de aterrizaje clandestinas ocultas en la selva peruana.',
      location: {
          center: [-74.19873, -9.59581],
          zoom: 4.35,
          pitch: 23.12,
          bearing: 8
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
         {
             layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
             opacity: .5,
         },
         {
             layer: 'airstrips-10224-dozgmq',
             opacity: 1,
         },
         {
             layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
             opacity: 0,
         },
         {
             layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
             opacity: 0,
         },
        //  {
        //      layer: 'coca-crops-density-20241002t1-55l40t',
        //      opacity: 0,

        //  },
      ],
      onChapterExit: [
           {
               layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
               opacity: 0
           },
      ],
    },
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Narcopistas',
      image: './path/to/image/source.png',
      description: 'La verificación periodística de cada una de ellas, con fuentes oficiales y locales, fue clave para confirmar que 67 de las 76 narcopistas están distribuidas entre Ucayali (46), Huánuco (17) y Pasco (5), y sirven hoy al narcotráfico.',
      location: {
          center: [-74.549, -9.575],
          zoom: 8,
          pitch: 35.12,
          bearing: 49.6
          // flyTo additional controls-
          // These options control the flight curve, making it move
          // slowly and zoom out almost completely before starting
          // to pan.
          //speed: 2, // make the flying slow
          //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        // {
        //     layer: 'coca-crops-density-20241002t1-55l40t',
        //     opacity: 1,

        // },
        {
            layer: 'airstrips-10224-dozgmq',
            opacity: 1,
        }

      ],
      onChapterExit: [
        // {
        //     layer: 'coca-crops-density-20241002t1-55l40t',
        //     opacity: 0,

        // }
      ]
  },
    // {
    //   id: 'amazon-region',
    //   title: 'Test',
    //   image: '',
    //   description:
    //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   location: {
    //     center: [-58.0283, -2.7068],
    //     zoom: 4.42,
    //     pitch: 0.0,
    //     bearing: -8.78
    //   },
    //   onChapterEnter: [
    //   ],
    //   onChapterExit: [
    //   ]
    // },
    // {
    //   id: 'amazon-logistics',
    //   title: 'Logistics hubs in the Amazon',
    //   image: '',
    //   description:
    //     'in July 2006, in an agreement between major trading companies working in Brazil that they would not buy soy from any area that was deforested after 2006. This agreement is the Soy Moratorium. The program was hugely successful but critics say this transformation was only possible because the Cerrado biome, which enjoys fewer protections, was right next to the forest. and could take in the growth that would otherwise have spread through the rainforest.',
    //   location: {
    //     center: [-56.67828, -5.98458],
    //     zoom: 5.09,
    //     pitch: 40.5,
    //     bearing: -22.38
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: 'soy-storage-facilities',
    //       opacity: 1
    //     }
    //   ],
    //   sources: 'ANTAQ (Ports), Trase.earth (storage facilities)',
    //   images: [
    //     {
    //       src: 'port1.jpg',
    //       position: 'top',
    //       title: 'Santarém port',
    //       author: 'Thais Borges'
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: 'soy-storage-facilities',
    //       opacity: 0.3
    //     }
    //   ]
    // }
  ]
};
