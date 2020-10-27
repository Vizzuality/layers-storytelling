# layers-storytelling

Integrates Layer manager with mapbox/storytelling to be able to display external layers

## Instructions

- Copy .env.template and rename it to .env
- Add Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token) to the new .env
- Update config.js with the desired chapters and layers
- Update index.html and manifest.json inside public folder to update title and SEO

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
