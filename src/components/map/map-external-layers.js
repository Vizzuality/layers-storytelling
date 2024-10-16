export default [
  // {
  //   id: '0b9f0100-ce5b-430f-ad8f-3363efa05481',
  //   slug: 'overall-environmental-democracy-index-score',
  //   source: 'resource-watch'
  // },
  // {
  //   id: '0448c79d-0ee0-42ff-9331-aeee70cef301',
  //   slug: 'tree-cover',
  //   source: 'resource-watch'
  //   //   decodeParams: { // decode Params and functions will be added to the layer. See Layer Manager readme
  //   //     startYear: 2001,
  //   //     endYear: 2019
  //   //   },
  //   //   decodeFunction: `\n      // values for creating power scale, domain (input), and range (output)\n
  //   //     float domainMin = 0.;\n
  //   //     float domainMax = 255.;\n
  //   //     float rangeMin = 0.;\n
  //   //     float rangeMax = 255.;\n\n
  //   //     float exponent = zoom < 13. ? 0.3 + (zoom - 3.) / 20. : 1.;\n
  //   //     float intensity = color.r * 255.;\n\n
  //   //     // get the min, max, and current values on the power scale\n
  //   //     float minPow = pow(domainMin, exponent - domainMin);\n
  //   //     float maxPow = pow(domainMax, exponent);\n
  //   //     float currentPow = pow(intensity, exponent);\n\n
  //   //     // get intensity value mapped to range\n
  //   //     float scaleIntensity = ((currentPow - minPow) / (maxPow - minPow) * (rangeMax - rangeMin)) + rangeMin;\n
  //   //     // a value between 0 and 255\n
  //   //     alpha = zoom < 13. ? scaleIntensity / 255. : color.g;\n\n
  //   //     float year = 2000.0 + (color.b * 255.);\n
  //   //     // map to years\n
  //   //     if (year >= startYear && year <= endYear && year >= 2001.) {\n
  //   //       color.r = 220. / 255.;\n
  //   //       color.g = (72. - zoom + 102. - 3. * scaleIntensity / zoom) / 255.;\n
  //   //       color.b = (33. - zoom + 153. - intensity / zoom) / 255.;\n
  //   //     } else {\n
  //   //       alpha = 0.;\n
  //   //     }\n`
  //   //   }
  //   // }
  // }
];
