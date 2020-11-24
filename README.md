# Layers-storytelling

Integrates [Vizzuality's Layer manager](https://github.com/Vizzuality/layer-manager) with [mapbox/storytelling](https://github.com/mapbox/storytelling) to be able to display external layers

The external layers have to be written in Layer Manager v3. Currently there is a parser implemented to also automatically convert resource-watch LM v2 layers into v3 but only for carto and raster layers.

## Examples

[Amazon soy ports story](https://news.mongabay.com/2020/11/multiplying-amazon-river-ports-open-new-brazil-to-china-commodities-routes) - [Just the app](http://amazon-ports-storytelling.vercel.app)


## Instructions

- Copy .env.template and rename it to .env
- Add Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token) to the new .env
- Update config.js with the desired chapters, layers and mapbox style
- External layers config should be specified on the map-external-layers.js file:
  For resource-watch layers. There is an automated way to fetch the layers

```

  {
    id: '0448c79d-0ee0-42ff-9331-aeee70cef301', // Id of the DATASET on resource watch
    slug: 'tree-cover', // New slug to call the layer in config.js
    source: 'resource-watch' // This is needed for resource-watch layers
    //   decodeParams: ... // optional
    //   decodeFunction: ... // optional
  }
```

- Update index.html and manifest.json inside public folder to update title and SEO

## Config
  Images must be placed on public folder. Background intro image is intro.png. It can be removed to have a transparent intro background.

  Definition of the chapter options on the config file:

  ```
  chapters: [
      {
        id: 'amazon-region', // Id of the mapbox or external layer
        title: 'Turning the Amazon river into an industrial waterway', // Title of the chapter
        intro: { // Add this to have an intro screen
          title: 'Amazon Soy Ports', Title of the intro
          date: 'Nov. 10 2020' Date of publishing
          height: '1300' // optional - height of the intro screen. default: full screen
          social: [
            {
              name: 'twitter',
              src: 'twitter.svg',
              href: 'https://twitter.com/mongabay'
            }
          ]
        },
        logos: [ // Array of logos to be shown on the bottom right of the screen
          {
            name: 'mongabay', // Name to add on the alt text
            src: 'logos.png', // logo image in public folder
            width: '200' // optional, size in pixels
            href: 'www.mongabay.org' // optional, link to url
          }
        ],
        images: [ // Array of images to be displayed on the chapter
          { src: 'chapter1_legend.png', // File
            position: 'top', // position of the image, top. before the text, bottom: after the text
            title: 'legend', // Title in the image caption
            author: 'Mongabay', // Author in the image caption
          },
          { src: 'chapter1_legend.png', position: 'bottom'}
        ],
        legend: [
          {
            title: 'Industrial port facilities in the Amazon basin',
            color: '#7259A8',
            border: 'black', // Not required. Default is none
            type: 'circle' // Default is square
          },
          {
            title: 'Soy Storage Facilities',
            color: '#BAA4F5'
          }
        ],
        sources: 'Sources: ANTAQ (Ports), Trase.earth (storage facilities)', // Sources line below the legend
        description: // Main text of the chapter
          'Brazil’s government has had major plans to exploit large portions of its 35,000-kilometers (22,000-miles) of waterways since the 1970s. But it was mostly privately funded projects that went ahead, with just a third of the nation’s navigable waterway potential now fulfilled.',
        location: { // Start location
          center: [-57.15869, -3.85456],
          zoom: 4.70,
          pitch: 43.50,
          bearing: 54.23
        },
        onChapterEnter: [ // Layers and opacity to display on enter
          {
            layer: 'amazon-ports',
            opacity: 1
          },
          {
            layer: 'soy-storage-facilities',
            opacity: 1
          }
        ],
        onChapterExit: [ // Layers and opacity to display on exit
        {
          layer: 'soy-storage-facilities',
          opacity: 0.3
        }
      ],
    }
```

## Translations

The app is using i18next and react-i18next npm packages.
The text will be translated to the browser selected language.

Define the translations in translations.js file on the root directory:

You can have as many languages as you want just add all the keys with the selected [language code](https://www.w3schools.com/tags/ref_language_codes.asp) and pick every text displayed on the app as a key the translation as the value.

E.g.

```
export default {
  es: {
    "Amazon Soy Ports": 'Puertos de soja en el Amazonas',
    ...
  },
  de: {
    ...
  }
};
```

## Iframe test

You can enter /test folder and use some [simple server](https://www.npmjs.com/package/http-server)(https://www.npmjs.com/package/http-server) to test the application on an iframe

## Installation and dependencies

Install dependencies listed in the `package.json` file:

```
yarn install
```

Run the development server:

```
yarn start
```

Follow the instructions above for setting up your configuration file and building out your story. Once the application is ready for deployment, run:

```
yarn build
```

This command will generate a `build` directory that contains everything you will need to deploy your story.
