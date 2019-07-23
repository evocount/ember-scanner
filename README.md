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
  @onScanSuccess={{action (mut result)}}
/>

Result: {{result.text}}
```

or

```hbs
<CodeScanner
  @device={{camera}}
  @onScanSuccess={{action "onScanSuccess"}}
  @onScanError={{action "onScanError"}}
  @onDevicesFound={{action "onCamerasFound"}}
  @onDevicesError={{action "onCamerasError"}}
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
