import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'giammattei-baby-reveal';
  clicked = false;
  countdown: number = null;
  showVideo = false;

  reveal(): any {
    this.clicked = true;
    this.countdown = 5;
    const interval = setInterval(() => {
      this.countdown--;
      // Display 'counter' wherever you want to display it.
      if (this.countdown === 0) {
        this.countdown = null;
        this.playVideo();
        clearInterval(interval);
      }
    }, 1000);
  }

  playVideo(): any {
    this.showVideo = true;
  }
}
