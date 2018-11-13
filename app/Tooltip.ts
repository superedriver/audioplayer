import { bootstrap } from "./helpers"

export class Tooltip {
  public $tooltip = document.createElement('div')

  constructor(public $root: HTMLElement, initialText: string) {
    this.$tooltip.classList.add('tooltip')
    this.$tooltip.innerHTML = initialText

    bootstrap(this.$root, this.$tooltip)
  }

  public changeLabelText(labelText: string) {
    this.$tooltip.innerHTML = labelText
  }
}
