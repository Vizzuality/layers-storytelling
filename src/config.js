const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cm1s0wzb800lf01pl8qsugoue',
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
        title: 'Pistas aéreas detectadas',
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
           {
               layer: 'coca-crops-density-20241002t1-55l40t',
               opacity: 0,

           },
        ],
        onChapterExit: [
             {
                 layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
                 opacity: 0
             },

        ]
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
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 1,

          },
          {
              layer: 'airstrips-10224-dozgmq',
              opacity: 1,
          }

        ],
        onChapterExit: [
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          }
        ]
    },
    {
        id: 'third-chapter',
        alignment: 'left',
        hidden: false,
        title: 'Third Title',
        image: './path/to/image/source.png',
        description: 'Copy these sections to add to your story.',
        location: {
            center: [-74.549, -9.575],
            zoom: 8,
            pitch: 35.12,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 1,
          }
        ],
        onChapterExit: [
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 0,
          }
        ]
    },
    {
        id: 'fourth-chapter',
        alignment: 'fully',
        hidden: false,
        title: 'Atalaya',
        image: './path/to/image/source.png',
        description: 'Algunos de los tajos abiertos en ese triángulo de ilegalidad han tomado paisajes completos. Sólo en la provincia de Atalaya, en la región Ucayali, se detectaron 32 pistas.',
        location: {
            center: [-73.413, -10.724],
            zoom: 9.83,
            pitch: 35.12,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 1,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 1,

          }
        ],
        onChapterExit: []
    },
    {
        id: 'fifth-chapter',
        alignment: 'left',
        hidden: false,
        title: 'Territorios indígenas',
        image: './path/to/image/source.png',
        description: 'Lo crítico es que 34 de las 67 narcopistas detectadas por el algoritmo están dentro de territorios indígenas y 20 alrededor.',
        location: {
            center: [-74.549, -9.575],
            zoom: 8,
            pitch: 35.12,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 1,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 1,

          }
        ],
        onChapterExit: []
    },
    {
        id: 'sixth-chapter',
        alignment: 'left',
        hidden: false,
        title: 'Sixth Title',
        image: './path/to/image/source.png',
        description: 'Siguiendo la información satelital, periodistas de Mongabay Latam llegaron a dos comunidades, ubicadas entre las regiones de Huánuco y Pasco, que soportan juntas la presencia de 15 pistas de aterrizaje clandestinas en sus territorios.',
        location: {
            center: [-74.927, -9.790],
            zoom: 11.06,
            pitch: 16,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 1,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          },
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 1,
          }
        ],
        onChapterExit: []
    },
    {
        id: 'seventh-chapter',
        alignment: 'right',
        hidden: false,
        title: 'Seventh Title',
        image: './path/to/image/source.png',
        description: 'Dentro de la Reserva Indígena Kakataibo Norte y Sur es posible ver al menos 02 tajos ilegales. Además, al menos 4 reservas indígenas para pueblos en aislamiento y contacto inicial son afectadas por la presencia de 6 aeródromos ilegales. Aunque estos territorios deberían ser intangibles por ley, en la práctica no lo son.',
        location: {
            center: [-75.3976425, -9.367474578],
            zoom: 11.06,
            pitch: 16,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 1,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          },
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 1,
          }
        ],
        onChapterExit: [
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 0,
          }
        ]
    },
    {
        id: 'eighth-chapter',
        alignment: 'right',
        hidden: false,
        title: 'concesiones forestales',
        image: './path/to/image/source.png',
        description: 'Las narcopistas se han instalado incluso dentro de 9 concesiones forestales que están destinadas al aprovechamiento sostenible del bosque. El algoritmo detectó en total 10 trazos.',
        location: {
            center: [-74.549, -9.575],
            zoom: 8,
            pitch: 35.12,
            bearing: 49.6
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 0,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
              opacity: 0.75,
          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
              opacity: 0.75,
          },
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 0,
          }
        ],
        onChapterExit: []
    },
    {
        id: 'ninth-chapter',
        alignment: 'right',
        hidden: false,
        title: 'Forestal Mendoza',
        image: './path/to/image/source.png',
        description: 'Una de las concesiones que presenta pistas clandestinas es administrada por la empresa Forestal Mendoza, que tiene como representante legal a Francisco de Asís Mendoza de Souza, actual alcalde provincial de Atalaya, que acumula investigaciones por usurpación, peculado y lavado de activos. El algoritmo detectó dentro de la concesión dos pistas de aterrizaje ilegales: una abierta en junio del 2018 y la otra en el mismo mes del 2020. ',
        location: {
            center: [-73.4800647201553, -9.46968987568065],
            zoom: 11.06,
            pitch: 35.12,
            bearing: 16
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'deforestationthreeregions-dcthbg',
              opacity: 0,
          },
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
              opacity: 0.75,
          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
              opacity: 0.75,
          },
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 0,
          }
        ],
        onChapterExit: []
    },
    {
        id: 'tenth-identifier',
        alignment: 'right',
        hidden: false,
        title: 'Tenth Title',
        image: './path/to/image/source.png',
        description: 'Un hallazgo clave de la investigación es que 52 de las 67 narcopistas situadas en el triángulo de la muerte que conforman Ucayali, Huánuco y Pasco —donde han asesinado a la mayoría de líderes indígenas— están a un kilómetro de ríos y vías, lo que las convierte en puntos estratégicos para el traslado de los cargamentos de droga.',
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
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 1,

          },
          {
              layer: 'airstrips-10224-dozgmq',
              opacity: 1,
          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
              opacity: 0.75,
          },
          {
              layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
              opacity: 0.75,
          },
          {
              layer: 'territorios-indigenas-0lu5ni copy',
              opacity: 1,
          }

        ],
        onChapterExit: [
          {
              layer: 'coca-crops-density-20241002t1-55l40t',
              opacity: 0,

          }
        ]
    }
]
};
