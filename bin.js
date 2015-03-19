

var pkg = require('./package.json');
var program = require('commander');
var VlcScreenshot = require('./index.js');

program
  .version(pkg.version)
  .option('--format <format>', 'File format jpg, png')
  .option('-o, --output <filePath>', 'Output file path')
  .option('--vlc <vlcPath>', 'VLC binary path')
  .parse(process.argv);

if (!program.output){
  console.error('output is a required argument');
  /*eslint-disable*/
  process.exit();
  /*eslint-enable */
}

var shooter = new VlcScreenshot();
shooter.format = program.format || 'png';
shooter.vlcPath = program.vlc || 'cvlc';
shooter.shoot(program.output, function(){
  console.error('All done  !');
});
