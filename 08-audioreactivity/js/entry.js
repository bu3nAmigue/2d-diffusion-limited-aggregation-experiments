import Settings from './Settings';
import DLA from '../../core/DLA';


let dla,
    song,
    amplitude,
    showText = true;

const sketch = function (instancep5) {

 
  instancep5.preload = function () {
    instancep5.soundFormats('mp3');
    song = instancep5.loadSound('../../assets/relax_rezz');
  }
  // Setup ---------------------------------------------------------------
  instancep5.setup = function () {
    instancep5.createCanvas(window.innerWidth, window.innerHeight);
    instancep5.colorMode(instancep5.HSB, 255);
    instancep5.ellipseMode(instancep5.CENTER);
    song.setVolume(0.8)
    amplitude = new p5.Amplitude();



    // Set up the simulation environment
    dla = new DLA(instancep5, Settings);
    // Spawn default walkers and clusters
    dla.customMovementFunction =  {
        dx: amplitude.getLevel() * 1000,
        dy: amplitude.getLevel() * 100,
      }
    reset();
  }

  // Draw ----------------------------------------------------------------
  instancep5.draw = function () {
    if (song.isPlaying()){

      let level = amplitude.getLevel()*100;
  
        dla.settings.BiasForce = amplitude.getLevel()*50;

        if (dla.numWalkers < 0){
          dla.removeAll();
          dla.createDefaultWalkers();
          dla.createDefaultClusters('Point');
        }
        if (level > 10){
          
          dla.toggleLineRenderingMode();
       
        }
       
        dla.iterate();
        dla.draw();

      }    
  }

  

  function reset() {
    dla.removeAll();
    dla.createDefaultWalkers();
    dla.createDefaultClusters('Point');
  }

  instancep5.mousePressed = function() {
    if (song.isPlaying()) {
    song.stop();
    }else{
      song.play();
    }
  }

  // Key handler ---------------------------------------------------------
  instancep5.keyReleased = function () {
    switch (instancep5.key) {
      case ' ':
        dla.togglePause();
        break;

      case 'w':
        dla.toggleShowWalkers();
        break;

      case 'c':
        dla.toggleShowClusters();
        break;

      case 'r':
        reset();
        break;

      case 'f':
        dla.toggleUseFrame();
        reset();
        break;

      case 'l':
        dla.toggleLineRenderingMode();
        break;
        
      case 'e':
        dla.export();
        break;

      case '1':
        dla.settings.VaryDiameterByDistance = true;
        dla.settings.VaryDiameterRandomly = false;
        dla.settings.MaxWalkers = 1000;
        reset();
        break;
      
      case 'p':
        song.play();

      case '2':  
        dla.settings.VaryDiameterByDistance = false;
        dla.settings.VaryDiameterRandomly = true;
        dla.settings.MaxWalkers = 700;
        reset();
        break;
    }
  }
}

// Launch the sketch using instancep5js in instantiated mode
new p5(sketch);