var spawn = require('child_process').spawn;
var temp = require('temp');
var fs = require('fs');

function VlcScreenshot(){

};
VlcScreenshot.prototype.outputFormat = 'png';
VlcScreenshot.prototype.vlcPath = 'cvlc';
VlcScreenshot.prototype.shoot = function(outputPath, then){
  var fileFormat = this.outputFormat;
  var vlcPath = this.vlcPath;
  temp.mkdir('node-screencapture', function(err, dirPath) {
    var vlc  = spawn(vlcPath,  ['screen://',
      '-f',
      '--rate=1',
      '--video-filter=scene',
      '--vout=dummy',
      '--scene-format='+fileFormat,
      '--scene-prefix=',
      '--scene-path='+dirPath,
      'vlc://quit',
      '--run-time=1',
    ]).on('close', function () {
      var stream = fs.createReadStream(dirPath+'/00001.png');
      stream.pipe(fs.createWriteStream(outputPath));
      stream.on('end', then);
    });
  });
};

module.exports = VlcScreenshot;