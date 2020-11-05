# layers-storytelling

Integrates [Vizzuality's Layer manager](https://github.com/Vizzuality/layer-manager) with [mapbox/storytelling](https://github.com/mapbox/storytelling) to be able to display external layers

## Instructions

- Copy .env.template and rename it to .env
- Add Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token) to the new .env
- Update config.js with the desired chapters and layers
- External layers config should be specified on the map-external-layers.js file
- Update index.html and manifest.json inside public folder to update title and SEO

## Config

  Definition of the chapter options on the config file:

  ```
  chapters: [
      {
        id: 'amazon-region', // Id of the mapbox or external layer
        title: 'Turning the Amazon river into an industrial waterway', // Title of the chapter
        intro: { // Add this to have an intro screen
          title: 'Amazon Soy Ports', Title of the intro
          date: 'Nov. 10 2020' Date of publishing
        },
        images: [ // Array of images to be displayed on the chapter
          { src: 'chapter1_legend.png', // File
            position: 'top', // position of the image, top. before the text, bottom: after the text
            title: 'legend', // Title in the image caption
            author: 'Mongabay', // Author in the image caption
            whiteLegend: true // Set to true if the image is dark for better visibility
          },
          { src: 'chapter1_legend.png', position: 'bottom'}],
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
