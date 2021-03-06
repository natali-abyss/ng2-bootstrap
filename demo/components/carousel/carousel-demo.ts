/// <reference path="../../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {carousel} from '../../../components/index';

// webpack html imports
let template = require('./carousel-demo.html');

@Component({
  selector: 'carousel-demo'
})
@View({
  template: template,
  directives: [carousel, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CarouselDemo {
  private myInterval:number = 5000;
  private noWrapSlides:boolean = false;
  private slides:Array<any> = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  private addSlide() {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  private removeSlide(index) {
    this.slides.splice(index, 1);
  }
}
