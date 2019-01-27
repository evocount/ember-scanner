import Component from '@ember/component';
import { observes } from '@ember-decorators/object';
import { classNames, layout, tagName } from '@ember-decorators/component';
import { BrowserMultiFormatReader } from '@zxing/library';
import template from './template';

@layout(template)
@tagName('video')
@classNames('code-scanner')
class CodeScanner extends Component {

  device = undefined;

  didInsertElement() {
    super.didInsertElement(...arguments);

    this.set('codeReader', new BrowserMultiFormatReader());

    this.startVideoScanning();

    this.codeReader.getVideoInputDevices().then(
      videoInputDevices => {
        if (this.onDevicesFound) {
          this.onDevicesFound(videoInputDevices);
        }
      }
    ).catch(
      error => {
        if (this.onDevicesError) {
          this.onDevicesError(error);
        }
      }
    )
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);

    if (this.get('codeReader')) {
      this.codeReader.reset();
    }
  }

  @observes('device')
  onDeviceChange() {
    this.codeReader.reset();
    this.startVideoScanning();
  }

  startVideoScanning() {
    this.codeReader.decodeFromInputVideoDevice(
      this.device,
      this.elementId
    ).then(
      result => {
        if (this.onScanSuccess) {
          this.onScanSuccess(result);
        }
      }
    ).catch(
      error => {
        if (this.onScanError) {
          this.onScanError(error);
        }
      }
    );
  }
}

export default CodeScanner;
