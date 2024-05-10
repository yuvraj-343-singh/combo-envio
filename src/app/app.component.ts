import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  brow: InAppBrowserObject;

  constructor(private inAppBrowser: InAppBrowser) {
    const options: InAppBrowserOptions = {
      toolbar: 'no',
      location: 'no', // Hide the bottom URL bar
      fullscreen: 'no', // Enable fullscreen mode
      presentationstyle: 'fullscreen', // Use fullscreen presentation style
      hideurlbar: 'yes', // This may or may not work, depending on the platform
      toolbarcolor: '#176bff',
      closebuttoncolor: '#ffffff',
      navigationbuttoncolor: '#ffffff'
    };

    // Set up the InAppBrowser with desired options
    this.brow = this.inAppBrowser.create('https://www.comboenvio.com', '_blank', options);
  }
}
