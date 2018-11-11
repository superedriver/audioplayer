export class Tooltip {
  public $tooltip = document.createElement('div')

  constructor(public $root: HTMLElement, initialText: string) {
    this.$tooltip.classList.add('tooltip')
    this.$tooltip.innerHTML = initialText

    this.$root.appendChild(this.$tooltip)
  }

  public changeLabelText(labelText: string) {
    this.$tooltip.innerHTML = labelText
  }
}
