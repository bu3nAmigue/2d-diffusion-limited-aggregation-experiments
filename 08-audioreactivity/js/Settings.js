export default {
  // Diameter of particles
  CircleDiameterRange: [2, 8],

  // Limit number of walkers and rely on bias to increase collision rate
 
  // Generate walkers in a circular area around center

  // Enable mapping between walker diameter and it's distance to the center
  VaryDiameterByDistance: false,

  // Enable randomizing of walker diameter within CircleDiameterRange
  VaryDiameterRandomly: true,

  // Move all walkers towards middle by default
  BiasTowards: 'Center',

  UseColors: true,

  RenderMode: 'Shapes',

};