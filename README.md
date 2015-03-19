# node-screencapture

A command line binary to take a screenshot of the desktop.

It is using vlc to realize screenshot.

### Requirements

Get vlc installed. This module won t check or install it for you.

### Install

```
npm i node-screencapture
```

### Usage

```
  Usage: index [options]

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    --format <format>        File format jpg, png
    -o, --output <filePath>  Output file path
    --vlc <vlcPath>          VLC binary path
```