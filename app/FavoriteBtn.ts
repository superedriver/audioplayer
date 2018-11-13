import { Tooltip } from './Tooltip'
import { bootstrap } from './helpers'

export class Favorite {
  public $elem: HTMLElement = document.createElement('span')
  public $icon: HTMLElement = document.createElement('i')
  public tooltip: Tooltip

  constructor(public $root: HTMLElement) {
    this.$elem.classList.add('favorite-wrapper')
    this.$icon.classList.add('icon', 'fas', 'fa-heart')
    this.tooltip = new Tooltip(this.$elem, 'Favorited')

    bootstrap(this.$elem, this.$icon)
    bootstrap(this.$root, this.$elem)
  }
}
