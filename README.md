[![Build Status](https://travis-ci.org/evocount/ember-scanner.svg?branch=master)](https://travis-ci.org/evocount/ember-scanner)
[![npm version](https://badge.fury.io/js/ember-scanner.svg)](https://badge.fury.io/js/ember-scanner)

ember-scanner
==============================================================================

QR code and barcode scanner for Ember based on [@zxing/library](https://github.com/zxing-js/library). ([Demo](https://evocount.github.io/ember-scanner/))


Installation
------------------------------------------------------------------------------

```
ember install ember-scanner
```


Usage
------------------------------------------------------------------------------

```hbs
<CodeScanner
  @onScanSuccess={{fn (mut this.result)}}
/>

Result: {{this.result.text}}
```

or

```hbs
<CodeScanner
  @device={{this.camera}}
  @onScanSuccess={{fn this.onScanSuccess}}
  @onScanError={{fn this.onScanError}}
  @onDevicesFound={{fn this.onCamerasFound}}
  @onDevicesError={{fn this.onCamerasError}}
/>
```

* `device`: Id of video-device (camera) to use for scanning (use one of the devices reported by `onDevicesFound` or `undefined` for automatic selection)
* `onScanSuccess`: Reports scan results as object after valid code was scanned. Decoded message is in `text`
* `onScanError`: In case error occurs during scanning
* `onDevicesFound`: Reports list of available devices/cameras as objects with fields `label`, `deviceId`
* `onDevicesError`: In case scan for devices fails

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
