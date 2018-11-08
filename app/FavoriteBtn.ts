import { Tooltip } from './Tooltip'

export class Favorite {
  public $elem: HTMLElement = document.createElement('span')
  public $icon: HTMLElement = document.createElement('i')
  public tooltip: Tooltip

  constructor(public $root: HTMLElement) {
    this.$elem.classList.add('favorite-wrapper')
    this.$icon.classList.add('icon', 'fas', 'fa-heart')
    this.tooltip = new Tooltip(this.$elem, 'Favorited')

    this.$elem.appendChild(this.$icon)
    this.$root.appendChild(this.$elem)
  }
}
