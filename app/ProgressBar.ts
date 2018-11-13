import { Circle } from 'progressbar.js'
import { bootstrap } from './helpers'

export class ProgressBar {
  public $elem = document.createElement('div')
  public circle: Circle

  constructor(public $root: HTMLElement) {
    this.$elem.id = 'progress-bar'
    this.$elem.classList.add('progress-bar')
    bootstrap(this.$root, this.$elem)

    this.circle = new Circle(this.$elem, {
      color: '#0078c8',
      strokeWidth: 4,
      trailColor: '#1c1c1c',
      duration: 200,
    });
    this.circle.set(0);
  }

  public setProgressValue(value: number) {
    value === 0 ? this.circle.set(value) : this.circle.animate(value)
  }
}
