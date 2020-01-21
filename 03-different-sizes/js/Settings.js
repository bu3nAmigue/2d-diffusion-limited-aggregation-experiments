export default {
  // Diameter of particles
  CircleDiameterRange: [5, 15],

  // Limit number of walkers and rely on bias to increase collision rate
  MaxWalkers: 3000,

  // Generate walkers in a circular area around center
  WalkerSource: 'Circle',

  // Enable mapping between walker diameter and it's distance to the center
  VaryDiameterByDistance: true,

  // Enable randomizing of walker diameter within CircleDiameterRange
  VaryDiameterRandomly: false,

  // Move all walkers towards middle by default
  BiasTowards: 'Center'
};